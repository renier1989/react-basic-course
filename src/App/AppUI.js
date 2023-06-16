import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoButtonCreate } from "../TodoButtonCreate";
import { TodoItem } from "../TodoItem";

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  chageStatusItem,
  deleteTodoItem,
}) {
  return (
    <>
      {" "}
      {/* esto es igual a usar las etiquetas <React.Fragment></React.Fragment> */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.text}
            onComplete={() => chageStatusItem(todo.text)} // con esto paso una propiedad que sera la funcion que va a cambiarle el estado al item
            onDeleteItem={() => deleteTodoItem(todo.text)} // con esto paso una propiedad que sera la funcion que va a eliminar un item de la lista de todos
          />
        ))}
      </TodoList>
      <TodoButtonCreate />
    </>
  );
}

export { AppUI };
