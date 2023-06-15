import './css/TodoItem.css'

function TodoItem({todo}) {
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${todo.completed && "Icon-check--active"}`}> V </span>
        
        <p className={`TodoItem-p ${todo.completed && "TodoItem-p--complete"}`}>{todo.text}</p>
        {/* <p className="TodoItem-p TodoItem-p--complete">{todo.text}</p> */}
        <span className='Icon Icon-delete'> X </span>
      </li>
    );
  }

export { TodoItem}