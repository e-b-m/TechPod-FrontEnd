import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <logo />
    </div>
  );
}

export default App;
