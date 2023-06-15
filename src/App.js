import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoButtonCreate } from "./TodoButtonCreate";
import { TodoItem } from "./TodoItem";
import React from "react";

const defaultTodos = [
  { text: "hola como estas ?", completed: false },
  { text: "estoy muy bien gracias", completed: true },
  { text: "Tienes planeado algo para mañana?", completed: false },
  { text: "la verdad es que no tengo nada planeado.", completed: false },
];

function App() {
  return (
    <> {/* esto es igual a usar las etiquetas <React.Fragment></React.Fragment> */}
      <TodoCounter completed={1} total={10} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.text} />
          ))}
      </TodoList>

      {/* <TodoList>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </TodoList> */}

      <TodoButtonCreate />
    
      </>
  );
}

export default App;
