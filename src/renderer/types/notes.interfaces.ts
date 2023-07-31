type NoteID = number;

export interface Note {
  id: NoteID;
  label: string;
  uuid: string;
}

export interface BackLink {
  source: NoteID;
  target: NoteID;
}
