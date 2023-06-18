import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoButtonCreate } from "../TodoButtonCreate";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";

import { TodoContext } from "../TodoContext"; // importamos el contexto para poder usar todos los metodos que usaran los demas componentes

function AppUI() {
  return (
    <>
    {/* Debemos llamar al componente TodoContext.Consumer y encapsular todo para que los demas componentes internos puedan consumir metodos y variales de todo el contexto de la aplicacion ,importante todo lo que va a estar internamente en Consumer debe estar dentro de una funcion e igual indicarle que es lo que va a consumir */}
      <TodoContext.Consumer>
        {({
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          chageStatusItem,
          deleteTodoItem,
        })=>(
          <>
          {/* esto es igual a usar las etiquetas <React.Fragment></React.Fragment> */}
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <TodoList>
            {loading && (
            <>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
            <TodosLoading/>
            </>
            )}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
  
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
        )}

      </TodoContext.Consumer>
    </>
  );
}

export { AppUI };
