import React from 'react';

const GraphInfo = ({ backlinksCount = 0, notesCount = 0 }) => {
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
