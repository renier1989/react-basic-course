import React from 'react';
import '../../css/TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext); // aqui usar el useContext para accedor a todos los metodos, estado , variable etc contenidas en el contexto

  return (
    <h1 className="TodoCounter">
      { completedTodos === totalTodos ? `Congratulations`: `You have completed ${completedTodos} of ${totalTodos} Items.`}
    {/* You have completed {completed} of {total} Items. */}
  </h1>
  )
}

export {TodoCounter}