import React from 'react'
import { TodoForm } from "../../components/TodoForm";
import { useLocation, useParams } from 'react-router-dom';
import { TodoContext } from '../../components/TodoContext';
import { Navigate } from 'react-router-dom';
import { TodosLoading } from '../../components/TodosLoading';

function EditTodoPage() {
  // const navigate = useNavigate();
  const location = useLocation(); // con esto recibo lo que se haya enviado desde la ruta previa con el navigate es la propiedad state.
  const params = useParams(); // esto lo uso para acceder el los parametros que vengan del la ruta
  const id = Number(params.id);
  const {loading, editTodo,getTodo} = React.useContext(TodoContext);
  
  let todoText; // creao una variable que se va a llenar con la data del texto del todo , ya se que venga de la ruta por la navegacion o que venga como dato consultado hacia el contexto del localstorage.

  

  if(location.state?.todo){ // aqui primero valido que exista algo en el location.state o en el location.state.todo
    todoText = location.state.todo.text;
  }else if(loading){ // si no se cumple lo primero, entonces muestro un loading. mientas encuentra informacion desde el locastorage para mostrar
    return (<TodosLoading />);
  }else{ // y por ultimo obtengo la data que viene del contexto de algo que este almacenado en el localstorage.
    // aqui puedo hacer una validacion extra que me diga si no encuentra el todo con el id que se le esta pasando por la ruta , entonces que me redirija a la vista del home
    const todo = getTodo(id);
    if(!getTodo(id)){ return <Navigate to='/' />  }
    todoText = todo.text;
  }
  
  return (
    <TodoForm
      labelTitle = 'Edit your new Todo'
      defaultTodoText = {todoText}
      labelTextButton = 'Edit'
      submitEvent = {(newText)=> editTodo(id, newText)}
    />
    // <div>NewTodoPage</div>
  )
}

export  {EditTodoPage}