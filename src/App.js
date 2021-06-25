import { Alert } from "@myob/myob-widgets";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert type="success">
      <strong>Page level — Success alert</strong> Best check yo self, you're not
      looking too good.
      </Alert>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
