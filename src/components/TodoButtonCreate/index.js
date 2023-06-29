import React from 'react';
import { TodoContext } from '../../components/TodoContext';
import '../../css/TodoButtonCreate.css'

function TodoButtonCreate() {
  const {setOpenModal} = React.useContext(TodoContext);
  return (
    <button className="CreateTodoButton"
    onClick={()=>{setOpenModal(state => !state) }}
    > + </button>
  )
}
export {TodoButtonCreate}