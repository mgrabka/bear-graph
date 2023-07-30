import Database from 'better-sqlite3';
import path from 'path';
import os from 'os';

const sqlitePath = path.join(
  os.homedir(),
  '/Library/Group Containers/9K33E3U3T4.net.shinyfrog.bear/Application Data/database.sqlite'
);

export const fetchNodes = () => {
  const db = new Database(sqlitePath, { readonly: true });

  const stmt = db.prepare('SELECT Z_PK AS id, ZTITLE AS title, ZUNIQUEIDENTIFIER AS uuid FROM ZSFNOTE');
  const rows = stmt.all();
  
  db.close();
  
  return rows;
}

export const fetchLinks = () => {
  const db = new Database(sqlitePath, { readonly: true });

  const stmt = db.prepare('SELECT ZLINKEDBY AS source, ZLINKINGTO AS target FROM ZSFNOTEBACKLINK');
  const rows = stmt.all();
  
  db.close();
  
  return rows;
}

