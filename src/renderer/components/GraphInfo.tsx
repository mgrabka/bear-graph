import React from 'react';
import useNotesStore from '../store';

const GraphInfo = () => {
  const notesCount = useNotesStore((state) => state.notes.length);
  const backlinksCount = useNotesStore((state) => state.backlinks.length);
  return (
    <div
      style={{ color: '#484848' }}
      className="select-none flex flex-row space-x-4"
    >
      <p>{notesCount} notes</p>
      <p>{backlinksCount} backlinks</p>
    </div>
  );
};

export default GraphInfo;
