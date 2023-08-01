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
