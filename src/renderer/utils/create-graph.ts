import { Node, Link, Note, BackLink } from '../types';

function createGraph(
  notes: Note[],
  backlinks: BackLink[],
): { nodes: Node[]; links: Link[] } {
  const nodes: Node[] = notes.map((node) => ({
    id: `${node.id}`,
  }));

  const links: Link[] = backlinks.map((link) => ({
    source: `${link.source}`,
    target: `${link.target}`,
  }));

  return { nodes, links };
}

export default createGraph;
