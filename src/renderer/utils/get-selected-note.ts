import { Note, Node } from '../types';

const getSelectedNote = (selectedNodes: Node[], notes: Note[]) => {
  let note = {
    id: 0,
    title: '',
    uuid: '',
  };

  if (selectedNodes && selectedNodes.length > 0) {
    const noteOfSelectedNode = notes.find(
      (note) => note.id === parseInt(selectedNodes[0].id),
    );
    if (noteOfSelectedNode) {
      note = noteOfSelectedNode;
    }
  }

  return note;
};

export default getSelectedNote;
