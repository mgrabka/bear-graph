import React, { Suspense } from 'react';
import GraphInfo from './ui/graph-info';
import GraphCanvas from './ui/graph-canvas';

export const App = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Suspense
        fallback={
          <div
            className="flex justify-center items-center h-screen"
            style={{ color: '#  484848' }}
          >
            Loading...
          </div>
        }
      >
        <GraphCanvas />
        <div className="absolute bottom-0 right-0 p-6">
          <GraphInfo />
        </div>
      </Suspense>
    </div>
  );
};
