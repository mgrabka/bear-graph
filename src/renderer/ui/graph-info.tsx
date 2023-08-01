import React from 'react';
import { Link, Node } from '@/shared/types';

const GraphInfo = ({ nodes, links }: { nodes: Node[]; links: Link[] }) => {
  return (
    <div className="flex flex-col">
      <div className="text-sm font-bold text-zinc-400">
        <p>🐻 Bear Graph View</p>
      </div>
      <div className="select-none flex flex-row space-x-4 text-xs text-zinc-600">
        <p>{nodes.length} notes</p>
        <p>{links.length} backlinks</p>
      </div>
    </div>
  );
};

export default GraphInfo;
