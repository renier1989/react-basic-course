import './css/TodoSearch.css'

function TodoSearch() {
  return (
    <input placeholder="Search Todo Items." className='TodoSearch'
    onChange={(event)=>{
      console.log('escribiste algo');
      console.log(event);
      console.log(event.target.value);
    }}
    />
  )
}

export {TodoSearch}