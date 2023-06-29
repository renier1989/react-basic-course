import React from 'react'
import { TodoForm } from "../../components/TodoForm";
import { useParams } from 'react-router-dom';
import { TodoContext } from '../../components/TodoContext';
function EditTodoPage() {
  const params = useParams();
  const id = Number(params.id);
  const {editTodo} = React.useContext(TodoContext);
  return (
    <TodoForm
      labelTitle = 'Edit your new Todo'
      labelTextButton = 'Edit'
      submitEvent = {(newText)=> editTodo(id, newText)}
    />
    // <div>NewTodoPage</div>
  )
}

export  {EditTodoPage}