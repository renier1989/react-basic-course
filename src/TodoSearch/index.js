import React from 'react';
import '../css/TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
    searchValue, setSearchValue
  } = React.useContext(TodoContext);
  return (
    <input placeholder="Search Todo Items." className='TodoSearch'
    value={searchValue}
    onChange={(event)=>{
      setSearchValue(event.target.value);
    }}
    />
  )
}

export {TodoSearch}