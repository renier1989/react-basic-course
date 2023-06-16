import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoButtonCreate } from "./TodoButtonCreate";
import { TodoItem } from "./TodoItem";
import React from "react";

// const defaultTodos = [
//   { text: "hola como estas ?", completed: false },
//   { text: "estoy muy bien gracias", completed: true },
//   { text: "Tienes planeado algo para mañana?", completed: true },
//   { text: "la verdad es que no tengo nada planeado.", completed: false },
//   { text: "REnIER vargas.", completed: false },
//   { text: "renier josue.", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

// localStorage.setItem('TODOS_V1',parsedTodos);

function App() {
  const todos_local = localStorage.getItem('TODOS_V1');
  
  let parsedTodos;

  if(!todos_local){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(todos_local);

  }
  
  const [searchValue, setSearchValue] = React.useState('');
  // console.log(searchValue);

  const [todos, setTodos] = React.useState(parsedTodos);
  // const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter((todo)=> !!todo.completed === true).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo)=>(
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ));

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1',JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  // esta funcion es para cambiar el status del item
  const chageStatusItem = (text) => {
    const newTodos = [...todos]; // con esto hago una copie de la lista de los todos
    // aqui hago la busqueda de los items por el texto como clave unica para saber cual es su index
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    // aqui filtro de la lista de todos que estan en el estado, a que item le dio click y que filtro por su index para poderle cambiar su status
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // aqui actualizo los todos que se marcaron
    saveTodos(newTodos);
  };

  const deleteTodoItem = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  // const messageCounter = `You Have completed ${completedTodos} of ${totalTodos}`;

  // const changeMessageComplete = () =>{

  //   return messageCounter;
  // }
  
  // const [messageComplete, setMessageComplete] = React.useState(false);
  
  return (
    <> {/* esto es igual a usar las etiquetas <React.Fragment></React.Fragment> */}
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

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
