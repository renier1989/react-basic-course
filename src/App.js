import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoButtonCreate } from "./TodoButtonCreate";
import { TodoItem } from "./TodoItem";
import React from "react";

const defaultTodos = [
  { text: "hola como estas ?", completed: false },
  { text: "estoy muy bien gracias", completed: true },
  { text: "Tienes planeado algo para mañana?", completed: true },
  { text: "la verdad es que no tengo nada planeado.", completed: false },
  { text: "REnIER vargas.", completed: false },
  { text: "renier josue.", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter((todo)=> !!todo.completed === true).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo)=>(
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ));

  
  return (
    <> {/* esto es igual a usar las etiquetas <React.Fragment></React.Fragment> */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map((todo) => (
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
