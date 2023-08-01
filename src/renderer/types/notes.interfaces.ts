type NoteID = number;

export interface Note {
  id: NoteID;
  title: string;
  uuid: string;
}

export interface BackLink {
  source: NoteID;
  target: NoteID;
}
