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
import { Modal } from "../Modal";

function AppUI() {
const {
  loading,
  error,
  searchedTodos,
  chageStatusItem,
  deleteTodoItem,
  openModal,
  setOpenModal,
} = React.useContext(TodoContext);
  return (
    <>
      {/* esto es igual a usar las etiquetas <React.Fragment></React.Fragment> */}

      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.text}
            onComplete={() => chageStatusItem(todo.text)} // con esto paso una propiedad que sera la funcion que va a cambiarle el estado al item
            onDeleteItem={() => deleteTodoItem(todo.text)} // con esto paso una propiedad que sera la funcion que va a eliminar un item de la lista de todos
          />
        ))}
      </TodoList>
      <TodoButtonCreate setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          Aqui se muestra el Modal
        </Modal>
      )}
    </>
  );
}

export { AppUI };
