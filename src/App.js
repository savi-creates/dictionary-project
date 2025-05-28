import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="purple" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://github.com/savi-creates"
            target="_blank"
            rel="noreferrer"
          >
            Savannah Andresson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/savi-creates/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
