import { app, BrowserWindow , ipcMain } from 'electron';
import { fetchLinks, fetchNodes, fetchNotePKs } from './bearDB';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
} 

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();
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

ipcMain.on('fetch_graph_data_from_db', async (event) => {
  try {
    const nodes = await fetchNodes()
    const links = await fetchLinks()

    event.reply('fetch_graph_data_from_db', { nodes, links });
  } catch (error) {
    console.error(error);
    event.reply('fetch_graph_data_from_db', error.message);
  }
});