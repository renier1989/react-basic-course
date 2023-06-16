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



// Esto es un custom hooks
// esto va a recibir 2 parametros uno sera el itemName que asignara el nombre donde se almacenar las cosas en el localStorage ej: 'TODOS_V1'
// tambien va a recibir un valor inicial que sera el initialValue , esto va a ser cualquier tipo de variable a ser almecenado en el localStorage
function useLocalStorage(itemName ,initialValue){

  const todos_local = localStorage.getItem(itemName);  // creo una variable que se va a llenar con los datos del localStorage
  let parsedItem;   // creo un variable de inicio donde se van a guardar la lista de los TODOS
  
  // aqui valido si es que existen datos en el localStorage sino es asi entonces creo la variable en el local o cargo la lista
  if(!todos_local){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(todos_local);
  }

  // creo un estado donde pueda manejar lo que esta en el localstorage
  const [item, setItem] = React.useState(parsedItem);

  // aqui guardo los datos de la lista tanto en el localStorage como el estado de react
  const saveItem = (newItem) => {
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  }

  // aqui exporto las cosas que necesito utilizar del lado de la App 
  // el saveItem es el que se va a encargar de actualizar el localStorage y el estado que posee la lista de los TODOS
  // el item posee la lista en si 
  // para usarlos del lado del App debo tener el cuenta el orden como los estoy importando 
  return [item, saveItem];

}

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
