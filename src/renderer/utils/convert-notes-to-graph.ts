import { Node, Link, Note, Backlink } from '../../shared/types';

function convertNotesToGraph(
  notes: Note[],
  backlinks: Backlink[],
): { nodes: Node[]; links: Link[] } {
  const nodes: Node[] = notes.map((note) => ({
    id: `${note.id}`,
    title: note.title,
    uuid: note.uuid,
  }));

  const links: Link[] = backlinks.map((backlink) => ({
    source: `${backlink.source}`,
    target: `${backlink.target}`,
  }));

  return { nodes, links };
}

export default convertNotesToGraph;
