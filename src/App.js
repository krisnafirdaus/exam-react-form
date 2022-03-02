import logo from "./logo.svg";
import ClassComponent from "./ClassComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
