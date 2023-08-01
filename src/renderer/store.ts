import { Note, Backlink } from './types';
import { atom } from 'jotai';

export const notesAtom = atom<Note[]>([]);
export const backlinksAtom = atom<Backlink[]>([]);
