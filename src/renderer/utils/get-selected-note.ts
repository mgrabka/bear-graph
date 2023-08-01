import { Note, Node } from '@/shared/types';

const getSelectedNote = (selectedNode: Node, notes: Note[]) => {
  let note = {
    id: 0,
    title: '',
    uuid: '',
  };
  if (selectedNode) {
    const noteOfSelectedNode = notes.find(
      (note) => note.id === parseInt(selectedNode.id),
    );

    if (noteOfSelectedNode) {
      note = noteOfSelectedNode;
    }
  }

  return note;
};

export default getSelectedNote;
