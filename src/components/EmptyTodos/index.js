import React from 'react'
import '../../css/EmptyTodos.css'

function EmptyTodos() {
  return (
    <div>
      
      <li className="TodoItem-empty">
        {/* <span className={`Icon Icon-check ${todo.completed && "Icon-check--active"}`}
        onClick={onComplete}
        > V </span> */}

        {/* <CompleteIcon completed={todo.completed} onComplete={onComplete} /> */}
        
        <p className='TodoItem-p-empty'>Sorry we couldn't find TODO Items to show!</p>

        {/* <DeleteIcon onDelete={onDeleteItem}/> */}


        {/* <span className='Icon Icon-delete'
        onClick={onDeleteItem}
        > X </span> */}
      </li>
    </div>
  )
}

export {EmptyTodos}