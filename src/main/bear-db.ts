import path from 'path';
import os from 'os';
import Database from 'better-sqlite3';
import { dialog } from 'electron';
import { BrowserWindow } from 'electron';

const defaultSqlitePath = path.join(
  os.homedir(),
  '/Library/Group Containers/9K33E3U3T4.net.shinyfrog.bear/Application Data/database.sqlite',
);

let sqlitePath = defaultSqlitePath;

export const selectPath = () => {
  const path = dialog.showOpenDialogSync({
    properties: ['openFile'],
    defaultPath: defaultSqlitePath,
  });

  if (!path) return;

  sqlitePath = path[0];
  const focusedWindow = BrowserWindow.getFocusedWindow();

  if (focusedWindow) focusedWindow.webContents.reload();
  return path;
};

export const fetchBearNotes = () => {
  const db = new Database(sqlitePath, { readonly: true });

  const stmt = db.prepare(
    'SELECT Z_PK AS id, ZTITLE AS title, ZUNIQUEIDENTIFIER AS uuid FROM ZSFNOTE WHERE ZTRASHED = 0',
  );
  const notes = stmt.all();

  db.close();

  return notes;
};

export const fetchBearBackLinks = () => {
  const db = new Database(sqlitePath, { readonly: true });

  const stmt = db.prepare(`
    SELECT BL.ZLINKEDBY AS source, BL.ZLINKINGTO AS target
    FROM ZSFNOTEBACKLINK AS BL
    INNER JOIN ZSFNOTE AS N1 ON BL.ZLINKEDBY = N1.Z_PK
    INNER JOIN ZSFNOTE AS N2 ON BL.ZLINKINGTO = N2.Z_PK
    WHERE N1.ZTRASHED = 0 AND N2.ZTRASHED = 0
  `);
  const backlinks = stmt.all();

  db.close();

  return backlinks;
};
