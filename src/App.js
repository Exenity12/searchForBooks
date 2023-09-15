import React, { useEffect, useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import  './App.css';
import Books from './Books';
import Book from './Book';

const url = 'https://www.googleapis.com/books/v1/volumes?q='

const App = (props) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sorting, setSorting] = useState('relevance');
  const [isLoaded, setIsLoaded] = useState(false);
  const [allItems, setAllItems] = useState(null);

  const arrayOfSelector = ["all", "art", "biography", "computers", "history", "medical", "poetry"];


  const changeSorting = (event) => {
    setSorting(event.target.value);
  };

  const changeCategory = (event) => {
    setCategory(event.target.value);
  };

  const enterText = (event) => {
    let user_input = event.target.value;
    let input = user_input.replaceAll(" ", "+");
    setSearch(input);
  };

  const getUrl = (value) => {
    if(value === "first") {
      return `${url}${search}${category === "all" ? "" : "+subject:" + category}&startIndex=0&maxResults=30&orderBy=${sorting}`
    };
    if(value !== "first") {
      return `${url}${search}${category === "all" ? "" : "+subject:" + category}
        &startIndex=${props.appState.allInformation.value.lastPage}&maxResults=30&orderBy=${sorting}`
    };
  }

  async function getBooks() {
    if(search.length < 1) return;
    try {
      setIsLoaded(true);
      let promise = await fetch(getUrl("first"));
      let books = await promise.json();
      setAllItems(books.totalItems);
      props.dispatch({
        type: 'UPDATE',
        body: books.items || [],
      });
      setIsLoaded(false);
    } catch(err) {
      console.log(err);
    };
  };

  async function getMoreBooks() {
    if(search.length < 1) return;
    if(props.appState.allInformation.value.allBooks.length < 29) return;
    try {
      setIsLoaded(true);
      let promise = await fetch(getUrl("second"));
      let books = await promise.json();
      setAllItems(books.totalItems);
      props.dispatch({
        type: 'MORE',
        body: books.items,
      });
      setIsLoaded(false);
    } catch(err) {
      console.log(err);
    };
  };

  useEffect(() => {
    const handleClick = event => {
      if(event.key === "Enter") {
        getBooks();
      }
    };
    window.addEventListener('keypress', handleClick);
  }, [])


  return (
    <div className={Boolean(isLoaded) ? 'loader' : "app"}>

      <div className={Boolean(isLoaded) ? 'loader-led' : "loader-none"}>Loadind...</div>

      <div className='header'>
        <h3 className='header-title'>Search for books</h3>
      </div>


        <div className='content'>

        <div className='search'>
          <div className='search__input-wrap'>
            <input className='search__input' onChange={event => enterText(event)}></input>
          </div>
          <div className='search__enter-wrap'>
            <NavLink to="/" className={`search__enter ${!search.length ? 'search__enter-disable' : ''}`} onClick={getBooks}>search</NavLink>
          </div>
        </div>


        <div className='selector'>

          <div className='selector__categories'>
            <h3 className='selector__categories-title'>Categories</h3>
            <select className='selector__categories-select' onChange={event => changeCategory(event)}>
              {arrayOfSelector.map((category, index) => (
                <option className='selector__categories-select_item' key={index}>{category}</option>
              ))}
            </select>
          </div>

          <div className='selector__sorting'>
            <h3 className='selector__sorting-title'>Sorting by</h3>
            <select className='selector__sorting-select' onChange={event => changeSorting(event)}>
              <option className='selector__sorting-select_item'>relevance</option>
              <option className='selector__sorting-select_item'>newest</option>
            </select>
          </div>
        </div>

        <Routes>
          <Route path="/" element={
            <Books
              allItems={allItems}
              getAllBooks={props.appState}
              LoadMoreBooks={getMoreBooks}
              setIsLoaded={setIsLoaded}
              chooseBook={props.dispatch}/>
          }/>

          <Route path="/*" element={
            <Book
              setIsLoaded={setIsLoaded}
              getState={props.appState.allInformation.value}/>
          }/>
        </Routes>


      </div>

    </div>
  );
};

export default App