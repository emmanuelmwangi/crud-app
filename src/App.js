import "./App.css";
import MainBody from "./components/mainBody";

function App() {
  return (
    <div>
      <div className="top-bar">
        <div>CrudApp</div>
        <div>
          <button type="button"> Reload</button>
        </div>
      </div>
      <div>
        <MainBody />
      </div>
    </div>
  );
}

export default App;
