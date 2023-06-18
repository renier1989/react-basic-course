import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoButtonCreate } from "../TodoButtonCreate";
import { TodoItem } from "../TodoItem";

function AppUI({
  loading,
  error,
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
        {loading && <p>We are loading the TODO list.....</p>}
        {error && <p>Uuupsss something gones wrong....</p>}
        {(!loading && searchedTodos.length === 0) && <p> We couldn't find TODOS task to show....</p>}

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
