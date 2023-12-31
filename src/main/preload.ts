// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer } from 'electron';

export type Channels = 'fetch_bear_notes_data_from_db' | 'select_bear_db_path';

contextBridge.exposeInMainWorld('api', {
  fetchBearNotes: () => ipcRenderer.invoke('fetch_bear_notes_data_from_db'),
  selectBearDbPath: () => ipcRenderer.invoke('select_bear_db_path'),
});
