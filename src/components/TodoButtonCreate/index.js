import React from 'react';
import { TodoContext } from '../../components/TodoContext';
import '../../css/TodoButtonCreate.css'

function TodoButtonCreate(props) {
  // const {setOpenModal} = React.useContext(TodoContext);
  return (
    <button className="CreateTodoButton"
    onClick={props.onClick}
    // onClick={()=>{setOpenModal(state => !state) }}
    > + </button>
  )
}
export {TodoButtonCreate}