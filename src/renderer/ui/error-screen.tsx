import React from 'react';

const ErrorScreen = () => {
  const handlePathSelect = async () => {
    await window.api.selectBearDbPath();
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border-2 border-zinc-800 rounded-2xl p-8 max-w-sm text-center">
        <h1 className="font-bold text-zinc-400">Couldn't load graph</h1>
        <div className="space-y-4">
          <p className="text-xs text-zinc-600">
            Bear's database is either inaccessible or corrupted.
          </p>
          <button
            className="text-xs text-zinc-600 underline hover:text-zinc-400"
            onClick={handlePathSelect}
          >
            Select path manually
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
