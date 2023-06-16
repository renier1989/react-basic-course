import '../css/TodoItem.css'
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';

function TodoItem({todo , onComplete, onDeleteItem}) {
    return (
      <li className="TodoItem">
        {/* <span className={`Icon Icon-check ${todo.completed && "Icon-check--active"}`}
        onClick={onComplete}
        > V </span> */}

        <CompleteIcon completed={todo.completed} onComplete={onComplete} />
        
        <p className={`TodoItem-p ${todo.completed && "TodoItem-p--complete"}`}>{todo.text}</p>

        <DeleteIcon onDelete={onDeleteItem}/>


        {/* <span className='Icon Icon-delete'
        onClick={onDeleteItem}
        > X </span> */}
      </li>
    );
  }

export { TodoItem}