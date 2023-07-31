import { Note } from '../types/notes.interfaces';
import { Node } from '../types/graph.interfaces';

const getNoteUrl = (selectedNodes: Node[], notes: Note[]) => {
  let noteUrls = {
    open: '',
    trash: '',
  };

  if (selectedNodes && selectedNodes.length > 0) {
    const noteOfSelectedNode = notes.find(
      (note) => note.id === parseInt(selectedNodes[0].id),
    );
    if (noteOfSelectedNode) {
      noteUrls.open = `bear://x-callback-url/open-note?id=${noteOfSelectedNode.uuid}`;
      noteUrls.trash = `bear://x-callback-url/trash?id=${noteOfSelectedNode.uuid}`;
    }
  }

  return noteUrls;
};

export default getNoteUrl;
