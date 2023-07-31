import React, { useEffect, useRef } from 'react';
import { Graph, GraphConfigInterface } from '@cosmograph/cosmos';
import createGraphFromNotes from '../utils/createGraphFromNotes';
import { Node, Link } from '../types/graph.interfaces';
import useNotesStore from '../store';

const graphProperties = {
  backgroundColor: '#151515',
  nodeSize: 4,
  nodeColor: '#4B5BBF',
  nodeGreyoutOpacity: 0.1,
  linkWidth: 0.5,
  linkColor: '#5F74C2',
  linkArrows: false,
  linkGreyoutOpacity: 0,
  randomSeed: 1,
};

const GraphCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const graphRef = useRef<Graph<Node, Link> | null>(null);

  const { updateBackLinks, updateNotes } = useNotesStore((state) => ({
    updateBackLinks: state.updateBackLinks,
    updateNotes: state.updateNotes,
  }));

  const config: GraphConfigInterface<Node, Link> = {
    ...graphProperties,
    simulation: {
      linkDistance: 10,
      linkSpring: 2,
      repulsion: 0.5,
      gravity: 0.1,
      decay: 100000,
    },
    events: {
      onClick: (node, i) => {
        if (node && i !== undefined && graphRef.current) {
          graphRef.current.selectNodeByIndex(i);
          graphRef.current.zoomToNodeByIndex(i, undefined, 10);
        } else if (graphRef.current) {
          graphRef.current.unselectNodes();
        }
        console.log('Clicked node: ', node);
      },
    },
  };

  const refreshGraph = async () => {
    if (!graphRef.current) {
      return;
    }
    const response = await window.api.fetchBearNotes();

    updateNotes(response.notes);
    updateBackLinks(response.backlinks);

    const { nodes, links } = createGraphFromNotes(
      response.notes,
      response.backlinks,
    );

    graphRef.current.setData(nodes, links);
    graphRef.current.fitView(250);
  };

  const handleBlur = () => {
    graphRef.current?.pause();
  };

  const handleFocus = () => {
    graphRef.current?.start();
  };

  let resizeTimer: NodeJS.Timeout;

  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (graphRef.current) {
        graphRef.current.fitView(250);
      }
    }, 50);
  };

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    graphRef.current = new Graph(canvasRef.current, config);
    refreshGraph();

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('resize', handleResize);

    return () => {
      graphRef.current?.pause();
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default GraphCanvas;
