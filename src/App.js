import "./App.css";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
