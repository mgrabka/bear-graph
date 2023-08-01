import React from 'react';
import { useAtom } from 'jotai';
import { notesAtom, backlinksAtom } from '../store';

const GraphInfo = () => {
  const [notesCount] = useAtom(notesAtom);
  const [backlinksCount] = useAtom(backlinksAtom);
  return (
    <div className="flex flex-col">
      <div className="text-sm font-bold text-zinc-400">
        <p>🐻 Bear Graph View</p>
      </div>
      <div className="select-none flex flex-row space-x-4 text-xs text-zinc-600">
        <p>{notesCount.length} notes</p>
        <p>{backlinksCount.length} backlinks</p>
      </div>
    </div>
  );
};

export default GraphInfo;
