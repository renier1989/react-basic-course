import React from 'react'
import { TodoForm } from "../../components/TodoForm";
import { TodoContext } from '../../components/TodoContext';

function NewTodoPage() {
  const {addTodo} = React.useContext(TodoContext);
  return (
    <TodoForm
      labelTitle = 'Create your new Todo'
      labelTextButton = 'Create'
      submitEvent = {(newText)=> addTodo(newText)}
    />
    // <div>NewTodoPage</div>
  )
}

export  {NewTodoPage}