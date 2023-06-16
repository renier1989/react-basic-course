import React from 'react';
import '../css/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
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