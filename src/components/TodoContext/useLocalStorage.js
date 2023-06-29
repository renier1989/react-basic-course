import React from "react";

// Esto es un custom hooks
// esto va a recibir 2 parametros uno sera el itemName que asignara el nombre donde se almacenar las cosas en el localStorage ej: 'TODOS_V1'
// tambien va a recibir un valor inicial que sera el initialValue , esto va a ser cualquier tipo de variable a ser almecenado en el localStorage


function useLocalStorage(itemName ,initialValue){

  const [state , dispatch] = React.useReducer(reducer, initialState({initialValue}));

  const {
      item, loading, error
  } = state ;
  
  // AQUI CREO LOS ACTIONCREATORS
  const onError = ()=> dispatch({type: actionTypes.error});
  const onLoading = ()=> dispatch({type: actionTypes.loading});
  const onLoadItem = (parsedItem) => dispatch({type: actionTypes.loadItem, payload: parsedItem})

  // // creo un estado donde pueda manejar lo que esta en el localstorage
  // const [item, setItem] = React.useState(initialValue); // ahora el estado inicial sera un array vacio
  // const [loading, setLoading] = React.useState(true); // creo el nuevo estado para manejar un mensaje de carga , esto se va a ejecutar apenas inicie la aplicacion
  // const [error, setError] = React.useState(false); // esto es un estado para manejar si hay un error, inicialmente estara en false para no mostrarle nada al usuario

  


  // con el useEffect ahora vamos a implementar que la lista se carguen al final y podamos darle al usuario un estado de carga
  React.useEffect(() => {
    // se encapsula dentro de una settimeout para similar una ejecuar asincrona 
    setTimeout(() => {
      try {
        const todos_local = localStorage.getItem(itemName);  // creo una variable que se va a llenar con los datos del localStorage
        let parsedItem;   // creo un variable de inicio donde se van a guardar la lista de los TODOS
        // aqui valido si es que existen datos en el localStorage sino es asi entonces creo la variable en el local o cargo la lista
        if(!todos_local){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(todos_local);
          onLoadItem(parsedItem);
          // setItem(parsedItem); // aqui cambio el esta de los todos.
        }
  
        onLoading();
        // setLoading(false); // si ya todo cargo cancelo la carga 
      } catch (error) {
        // setLoading(false); // si ya hubo un error igual debo cancelar la carga 
        onLoading();
        onError();

        // setError(true); // y puedo mostrar la propiedad error como true o mostrar el error exacto mandando error
        // setError(error); // y puedo mostrar la propiedad error como true o mostrar el error exacto mandando error
      }
    }, 2000);
    console.log('The todo list had been loaded successfully!!!');
    },[]); // al final se pone un arreglo vacio para indicar que el effecto se ejecute una unica vez
  
    // aqui guardo los datos de la lista tanto en el localStorage como el estado de react
    const saveItem = (newItem) => {
      try {
        localStorage.setItem(itemName,JSON.stringify(newItem));
        onLoadItem(newItem);
        // setItem(newItem);
      } catch (error) {
        onError();
        
      }
    }
  
    // al enviar mas de una propiedad se recomienda usar llaves y enviarlo como un objeto 
    // asi el lado que recibe estad propiedades ya no tiene que preocuparse del orden en el que llegan , como cuando se envian en forma de array
    return {item, saveItem, loading, error};
  
  }

  // AQUI CREAMOS EL INICIALSTATE PARA PODER USAR LOS ESTADO DERIVADOS.
  // CREO EL INITIALSTATE COMO UNA FUNCION PORQUE ESTE VA A RECIBIR UN INITIALVALUE
  const initialState = ({initialValue}) => ({
    item : initialValue,
    loading : true,
    error : false,
  });

  const actionTypes = {
    loading : 'LOADING',
    error : 'ERROR',
    loadItem : 'LOADITEM',
  }

  const reducer = (state , action) => {
    switch (action.type){
      case  actionTypes.loading : 
        return {
          ...state,
          loading: false
        };
      case actionTypes.error :
        return {
          ...state,
          error : true,
        };
      case actionTypes.loadItem :
        return {
          ...state,
          error : false,
          loading : false,
          item : action.payload,
        };
        default : 
        return {...state}
    }

  }


  export {useLocalStorage};