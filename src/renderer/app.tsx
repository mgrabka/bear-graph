import * as React from 'react';
import * as ReactDOM from 'react-dom';
const handleClick = () => {
  window.electron.ipcRenderer.once('fetch_graph_data_from_db', (arg) => {
    // eslint-disable-next-line no-console
    console.log(arg);
  });
  window.electron.ipcRenderer.sendMessage('fetch_graph_data_from_db');
}
function App() {
  return (
    <div>
      <h2>Hello from React!</h2>
      <button onClick={handleClick}>Fetch Note PKs</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
