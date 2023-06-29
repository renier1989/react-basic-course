import '../../css/TodoItem.css'
import {CompleteIcon} from '../../components/TodoIcon/CompleteIcon';
import {DeleteIcon} from '../../components/TodoIcon/DeleteIcon';
import {EditIcon} from '../../components/TodoIcon/EditIcon';

function TodoItem({todo , onComplete, onDeleteItem, onEditItem}) {
    return (
      <li className="TodoItem">
        {/* <span className={`Icon Icon-check ${todo.completed && "Icon-check--active"}`}
        onClick={onComplete}
        > V </span> */}

        <CompleteIcon completed={todo.completed} onComplete={onComplete} />
        
        <p className={`TodoItem-p ${todo.completed && "TodoItem-p--complete"}`}>{todo.text}</p>


        <EditIcon onEdit={onEditItem}/>
        <DeleteIcon onDelete={onDeleteItem}/>


        {/* <span className='Icon Icon-delete'
        onClick={onDeleteItem}
        > X </span> */}
      </li>
    );
  }

export { TodoItem}