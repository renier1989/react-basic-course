import "./App.css";
import {TodoCounter} from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoButtonCreate } from "./TodoButtonCreate";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </TodoList>

      {/* <TodoButtonCreate /> */}


    </div>
  );
}



function TodoItem() {
  return (
    <li>
      <span> V </span>
      <p>esto va a ser un item del todo machine</p>
      <span> X </span>
    </li>
  );
}

export default App;
