import { app, BrowserWindow, ipcMain } from 'electron';
import { fetchBearBackLinks, fetchBearNotes } from './bearDB';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// eslint-disable-next-line
if (require('electron-squirrel-startup')) {
  app.quit();
}

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

ipcMain.on('fetch_bear_notes_data_from_db', async (event) => {
  try {
    const notes = await fetchBearNotes();
    const backlinks = await fetchBearBackLinks();

    event.reply('fetch_bear_notes_data_from_db', { notes, backlinks });
  } catch (error) {
    console.error(error);
    event.reply('fetch_bear_notes_data_from_db', error.message);
  }
});
