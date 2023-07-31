import React, { Suspense } from 'react';
import GraphInfo from './components/GraphInfo';
import GraphCanvas from './components/GraphCanvas';

export const App = () => {
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
        <GraphCanvas />
        <div className="absolute bottom-0 right-0 p-6">
          <GraphInfo backlinksCount={122} notesCount={33} />
        </div>
      </Suspense>
    </div>
  );
};
