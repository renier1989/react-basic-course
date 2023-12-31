import React from 'react'
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext(); // con esto creamos el contexto para toda la aplicacion

// este componente resibira la propiedad de children que sera los otros componente que heredaran todo lo que el TodoProvider le va a enviar
function TodoProvider({children}) {
    //aqui es donde puedo tener toda la logica y estado y variables que quisiera compartir en toda la aplicacion.

      // importante ahora el custom hook esta exportando en forma de objeto, quiere decir que al momento de recibir las propiedades
  // estas propiedades deben tener el mismo nombre a como son enviadas 
  // o usar la sintaxis para renombrar las propiedades de un objeto "item : todos,"" 
  const {
    item : todos, 
    saveItem : saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1' , []); 

const [searchValue, setSearchValue] = React.useState('');
const completedTodos = todos.filter((todo)=> !!todo.completed === true).length;
const totalTodos = todos.length;
const searchedTodos = todos.filter((todo)=>(
  todo.text.toLowerCase().includes(searchValue.toLowerCase())
));

const [openModal, setOpenModal] = React.useState(false);

// esta funcion crear un nuevo todo de lo que haya escrito el usuario en el modal
const addTodo = (text) => {
  const newTodos = [...todos]; // con esto hago una copia de la lista de los todos
  // aqui agrego al arreglo un nuevo todo task
  newTodos.push({
    text,
    completed: false,
  })
  
  // aqui actualizo los todos que se marcaron
  saveTodos(newTodos); // qui tengo que llamar a la nueva funcion que va a actalizar los la lista tanto en el localstorage como en el estado de react
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
        // para poder exponer todos los metodos , variables y estados  se hacer a traves de un value 
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            chageStatusItem,
            deleteTodoItem,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {/* este childre se convertira en los demas componente que consumiran todo desde el contexto  */}
            {children}
        </TodoContext.Provider>
    );

}

export {TodoContext, TodoProvider};


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