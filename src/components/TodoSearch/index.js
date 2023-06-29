import React from 'react';
import '../../css/TodoSearch.css'
import { TodoContext } from '../TodoContext';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

function TodoSearch() {
  const {
    searchValue, setSearchValue
  } = React.useContext(TodoContext);


  // uso esto para poder implementar la busqueda en el navegador 
  const navigate = useNavigate();
  const [searchParmas, setSerachParamas] = useSearchParams();

  const initialSearchValue = searchParmas.get('search') || '';

  React.useEffect(()=>{
    setSearchValue(initialSearchValue);
  },[initialSearchValue, setSearchValue]);


  return (
    <input placeholder="Search Todo Items." className='TodoSearch'
    value={searchValue || initialSearchValue}
    onChange={(event)=>{
      setSearchValue(event.target.value);
      navigate(`?search=${event.target.value}`);
    }}
    />
  )
}

export {TodoSearch}