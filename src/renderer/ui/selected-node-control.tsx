import React from 'react';
import { Node } from '@/shared/types';

const SelectedNodeControl = ({ selectedNode }: { selectedNode: Node }) => {
  return (
    <div className="absolute bottom-0 left-0 p-6 space-y-2 flex flex-col w-full items-center">
      <div className="text-lg font-bold text-zinc-400 max-w-lg flex flex-row">
        <h1>"</h1>
        <h1 className="truncate">{selectedNode.title}</h1>
        <h1>"</h1>
      </div>
      <div className="flex flex-row space-x-4">
        <a href={`bear://x-callback-url/open-note?id=${selectedNode.uuid}`}>
          <div className="border-2 border-zinc-800 rounded-md px-2 text-sm text-zinc-600 hover:text-zinc-400 hover:border-zinc-400">
            open note
          </div>
        </a>
        <a href={`bear://x-callback-url/trash?id=${selectedNode.uuid}`}>
          <div className="border-2 border-zinc-800 rounded-md px-2 text-sm text-zinc-600 hover:text-zinc-400 hover:border-zinc-400">
            trash note
          </div>
        </a>
      </div>
    </div>
  );
};

export default SelectedNodeControl;
