import React from 'react';
import useNotesStore from '../store';

const GraphInfo = () => {
  const notesCount = useNotesStore((state) => state.notes.length);
  const backlinksCount = useNotesStore((state) => state.backlinks.length);
  return (
    <div className="flex flex-col">
      <div className="text-sm font-bold text-zinc-400">
        <p>🐻 Bear Graph View</p>
      </div>
      <div className="select-none flex flex-row space-x-4 text-xs text-zinc-600">
        <p>{notesCount} notes</p>
        <p>{backlinksCount} backlinks</p>
      </div>
    </div>
  );
};

export default GraphInfo;
