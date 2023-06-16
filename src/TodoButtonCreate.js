import './css/TodoButtonCreate.css'

function TodoButtonCreate() {
  return (
    <button className="CreateTodoButton"
    onClick={(event) => {
      console.log('hola le diste click');
      console.log(event);
      console.log(event.target);
    }}
    > + </button>
  )
}
export {TodoButtonCreate}