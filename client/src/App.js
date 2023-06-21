import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="mx-auto" style={{ width: "80vw" }}>
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default App;
