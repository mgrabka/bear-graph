import { Node, Link } from '../types/graph.interfaces';
import { Note, BackLink } from '../types/notes.interfaces';

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
