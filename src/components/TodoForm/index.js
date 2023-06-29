import React from 'react'
import '../../css/TodoForm.css'
import { TodoContext } from '../../components/TodoContext';
import { useNavigate } from 'react-router-dom';


function TodoForm({labelTitle, labelTextButton,submitEvent}) {
    const navigate = useNavigate();
    // Accedo al contexto para poder hacer uso de los metodo, variables y estados
    const {
        addTodo,
        editTodo,
        // setOpenModal,
    } = React.useContext(TodoContext);


    const [newTodoValue, setNewTodoValue] = React.useState(''); // creo un nuevo valor para saber que es lo que estoy escribiendo en el textarea y poder crear el nuevo Todo Task

    // metodo para controlar que el formulario no haga submit y recargue la pagina
    const onSumirForm = (event)=>{
        event.preventDefault();
        submitEvent(newTodoValue);
        // addTodo(newTodoValue); // este metodo va a estar en el contexto y recibe lo que el usuario escribio+
        navigate('/');
        // setOpenModal(false); // esto es para cuando se haga el submit el modal se cierre 
    }
    // metodo para actualicar el estado del setOpenModal y cerrar el modal en si
    const onCancelForm = (event)=> {
        navigate('/');
        // setOpenModal(false);
    }

    const onChangeTextarea = (event)=>{
        setNewTodoValue(event.target.value);
    }

  return (
    <div>
        <form onSubmit={onSumirForm}>
            <label>{labelTitle}</label>
            <textarea 
            value={newTodoValue}  //esto es la valor de estado que va a tomar lo que se este escribiento en el textarea
            onChange={onChangeTextarea} // esto es para que cada vez que hay un cambio en el textarea se actualice el estado NewTodoValue
            placeholder='Write here your new Todo Task'
            />
            <div className='TodoForm-buttonContainer'>
                <button onClick={onCancelForm} type="" className='TodoForm-button TodoForm-button--cancel '>Cancel</button>
                <button type="submit" className='TodoForm-button TodoForm-button--add'>{labelTextButton}</button>
            </div>
        </form>
    </div>
  )
}

export { TodoForm}