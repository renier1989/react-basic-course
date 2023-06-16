import '../css/TodoCounter.css'

function TodoCounter({total, completed}) {
  return (
    <h1 className="TodoCounter">
      { completed === total ? `Congratulations`: `You have completed ${completed} of ${total} Items.`}
    {/* You have completed {completed} of {total} Items. */}
  </h1>
  )
}

export {TodoCounter}