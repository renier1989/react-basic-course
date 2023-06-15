import './css/TodoCounter.css'

function TodoCounter({total, completed}) {
  return (
    <h1 className="TodoCounter">
    You have completed {completed} of {total} Items.
  </h1>
  )
}

export {TodoCounter}