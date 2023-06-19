import React from 'react';
import { TodoContext } from '../TodoContext';
import '../css/TodoButtonCreate.css'

function TodoButtonCreate() {
  const {setOpenModal} = React.useContext(TodoContext);
  return (
    <button className="CreateTodoButton"
    onClick={()=>{setOpenModal(state => !state) }}
    > + </button>
  )
}
export {TodoButtonCreate}