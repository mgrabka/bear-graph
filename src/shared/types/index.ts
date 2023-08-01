type NoteID = number;

export interface Note {
  id: NoteID;
  title: string;
  uuid: string;
}

export interface Backlink {
  source: NoteID;
  target: NoteID;
}

export interface Node extends Omit<Note, 'id'> {
  id: string;
}

export interface Link {
  source: string;
  target: string;
}
