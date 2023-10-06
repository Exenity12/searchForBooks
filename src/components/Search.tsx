import { NavLink } from 'react-router-dom';

import  './components.css';

const Search = (props: any) => {
  return (
    <div className='search'>
      <div className='search__input-wrap'>
        <input className='search__input' onChange={event => props.enterText(event)}></input>
      </div>
      <div className='search__enter-wrap'>
        <NavLink to="/" className={`search__enter ${!props.search.length ? 'search__enter-disable' : ''}`} onClick={props.getBooks}>search</NavLink>
      </div>
    </div>
  );
};

export default Search