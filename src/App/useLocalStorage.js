import React from "react";

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

  export {useLocalStorage};