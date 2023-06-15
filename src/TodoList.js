import React from 'react'

function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.children}
    </ul>
  )
}

export {TodoList}