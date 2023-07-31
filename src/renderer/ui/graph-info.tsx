import React from 'react';
import useNotesStore from '../store';

const GraphInfo = () => {
  const notesCount = useNotesStore((state) => state.notes.length);
  const backlinksCount = useNotesStore((state) => state.backlinks.length);
  return (
    <div style={{ color: '#484848' }} className="text-sm flex flex-col">
      <div className="text-white">
        <p>🐻 Bear Graph View</p>
      </div>
      <div className="select-none flex flex-row space-x-4">
        <p>{notesCount} notes</p>
        <p>{backlinksCount} backlinks</p>
      </div>
    </div>
  );
};

export default GraphInfo;
