import "./App.css";
import Middle from "./components/Middle";
import Right from "./components/Right";

function App() {
  return (
    <div className="app">
      <main>
        <div className="main_body">
          <Middle />
          <Right />
        </div>
      </main>
    </div>
  );
}

export default App;
