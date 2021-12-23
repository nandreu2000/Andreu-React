import logo from './logo.svg';
import './App.css';
import MiModulo from "./MiModulo.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          La Primera modificacion en React JS
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

      <MiModulo/>

    </div>
  );
}

export default App;
