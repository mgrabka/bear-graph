import { app, BrowserWindow, ipcMain } from 'electron';
import { fetchBearBacklinks, fetchBearNotes, selectPath } from './bear-db';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    minHeight: 400,
    minWidth: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('fetch_bear_notes_data_from_db', () => {
  const notes = fetchBearNotes();
  const backlinks = fetchBearBacklinks();
  return { notes, backlinks };
});

ipcMain.handle('select_bear_db_path', () => {
  selectPath();
});
