import React, { Suspense, useState, useEffect } from 'react';
import GraphInfo from './ui/graph-info';
import ErrorScreen from './ui/error-screen';
import GraphVisualization from './ui/graph-visualization';
import convertNotesToGraph from './utils/convert-notes-to-graph';
import { Node, Link } from '@/shared/types';

const App = () => {
  const [error, setError] = useState<Error | null>(null);

  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.api.fetchBearNotes();
        const { nodes, links } = convertNotesToGraph(
          response.notes,
          response.backlinks,
        );
        setNodes(nodes);
        setLinks(links);
      } catch (error) {
        handleError(error);
      }
    };

    fetchData();
  }, []);

  const handleError = (error: Error | null) => {
    setError(error);
  };

  if (error != null) {
    return <ErrorScreen />;
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Suspense
        fallback={
          <div
            className="flex justify-center items-center h-screen"
            style={{ color: '#484848' }}
          >
            Loading...
          </div>
        }
      >
        <GraphVisualization nodes={nodes} links={links} />
        <div className="absolute bottom-0 left-0 p-3">
          <GraphInfo nodes={nodes} links={links} />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
