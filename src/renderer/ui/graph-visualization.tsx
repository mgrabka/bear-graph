import React, { useState, useRef, useEffect } from 'react';
import { Cosmograph, CosmographProvider } from '@cosmograph/react';
import { Node, Link } from '@/shared/types';
import SelectedNodeControl from './selected-node-control';

const GraphVisualization = ({
  nodes,
  links,
}: {
  nodes: Node[];
  links: Link[];
}) => {
  const cosmographRef = useRef(null);

  const [selectedNode, setSelectedNode] = useState<Node | undefined>();
  const [showButton, setShowButton] = useState(false);

  let resizeTimer: NodeJS.Timeout;

  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (cosmographRef.current) {
        cosmographRef.current.fitView(250);
      }
    }, 50);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <CosmographProvider nodes={nodes} links={links}>
      <Cosmograph
        ref={cosmographRef}
        labelAccessor={(node: Node) => node.title}
        nodeColor={'#b3b3b3'}
        backgroundColor={'#151515'}
        nodeSize={4}
        linkWidth={0.5}
        linkColor={'#656565'}
        simulationRepulsion={0.5}
        simulationDecay={10000}
        simulationGravity={0.1}
        simulationLinkSpring={2}
        simulationLinkDistance={10}
        onClick={(n) => {
          if (n) {
            setSelectedNode(n);
            cosmographRef.current?.zoomToNode(n);
            setShowButton(true);
          } else {
            setSelectedNode(undefined);
            setShowButton(false);
          }
        }}
      />
      {showButton && <SelectedNodeControl selectedNode={selectedNode} />}
    </CosmographProvider>
  );
};

export default GraphVisualization;
