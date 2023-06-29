import React from "react";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoButtonCreate } from "../../components/TodoButtonCreate";
import { TodoItem } from "../../components/TodoItem";
import { TodosLoading } from "../../components/TodosLoading";
import { TodosError } from "../../components/TodosError";
import { EmptyTodos } from "../../components/EmptyTodos";
import { TodoContext } from "../../components/TodoContext"; // importamos el contexto para poder usar todos los metodos que usaran los demas componentes
import { Modal } from "../../components/Modal";
import { TodoForm } from "../../components/TodoForm";
import { useNavigate } from "react-router-dom";

function HomePage() {
 const navigate = useNavigate();
const {
  loading,
  error,
  searchedTodos,
  chageStatusItem,
  deleteTodoItem,
  // openModal,
  // setOpenModal,
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
            key={todo.id}
            onEditItem = {()=> navigate(`edit/${todo.id}`)}
            onComplete={() => chageStatusItem(todo.id)} // con esto paso una propiedad que sera la funcion que va a cambiarle el estado ala item
            onDeleteItem={() => deleteTodoItem(todo.id)} // con esto paso una propiedad que sera la funcion que va a eliminar un item de la lista de todos
          />
        ))}
      </TodoList>
      <TodoButtonCreate 
      onClick={() => navigate('/new')}
      // setOpenModal={setOpenModal}
      />

      {/* {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )} */}
    </>
  );
}

export { HomePage };
