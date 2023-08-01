import React, { Suspense } from 'react';
import GraphInfo from './ui/graph-info';
import GraphCanvas from './ui/graph-canvas';
import ErrorScreen from './ui/error-screen';

const App = () => {
  const [error, setError] = React.useState<Error | null>(null);
  const handleError = (error: Error | null) => {
    setError(error);
  };

  if (error != null) {
    return <ErrorScreen error={error} />;
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
        <GraphCanvas onError={handleError} />
        <div className="absolute bottom-0 right-0 p-6">
          <GraphInfo />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
