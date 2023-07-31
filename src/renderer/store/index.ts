import { create } from 'zustand';
import { Note, BackLink } from '../types/notes.interfaces';

interface NotesState {
  notes: Note[];
  backlinks: BackLink[];
  updateNotes: (notes: Note[]) => void;
  updateBackLinks: (backlinks: BackLink[]) => void;
}

const useNotesStore = create<NotesState>()((set) => ({
  notes: [],
  backlinks: [],
  updateNotes: (notes) => set(() => ({ notes: notes })),
  updateBackLinks: (backlinks) => set(() => ({ backlinks: backlinks })),
}));

export default useNotesStore;
