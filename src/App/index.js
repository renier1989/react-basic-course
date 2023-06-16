
import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

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
  //aqui hago uso de mi custom Hook , debo tener el cuenta el orden como exporte los elemetos desdel el custom hook para llamarlos
  // estos puedes tener cualquier nombre pero siempre respetando el orden de exportacion 
  // por ejemplo : en la exportacion desde el hook es "item" aqui lo llamo "todos" igual para "saveItem" -> "saveTodos"
  const [todos, saveTodos] = useLocalStorage('TODOS_V1' , []); 
  
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter((todo)=> !!todo.completed === true).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo)=>(
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ));

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
    saveTodos(newTodos); // qui tengo que llamar a la nueva funcion que va a actalizar los la lista tanto en el localstorage como en el estado de react
  };

  const deleteTodoItem = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); // qui tengo que llamar a la nueva funcion que va a actalizar los la lista tanto en el localstorage como en el estado de react
  }

  // creo un conponente que solo va a abstraer la parte de UI para los usuarios y en esta parte solo tendre la logica de la aplicacion 
  return (
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      chageStatusItem={chageStatusItem}
      deleteTodoItem={deleteTodoItem}
    />
  );
}

export default App;
