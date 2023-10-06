import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import  './App.css';
import Books from './Books';
import Book from './Book';
import Header from './components/Header';
import Selector from './components/Selector';
import Search from './components/Search';

const URL = 'https://www.googleapis.com/books/v1/volumes?q='

const App = (props: any) => {
  const [search, setSearch]: any = useState('');
  const [category, setCategory]: any = useState('all');
  const [sorting, setSorting]: any = useState('relevance');
  const [isLoaded, setIsLoaded]: any = useState(false);
  const [allItems, setAllItems]: any = useState(null);


  const changeSorting = (event: any) => {
    setSorting(event.target.value);
  };

  const changeCategory = (event: any) => {
    setCategory(event.target.value);
  };

  const enterText = (event: any) => {
    let user_input = event.target.value;
    let input = user_input.replaceAll(" ", "+");
    setSearch(input);
  };

  const getUrl = (isNewBooks: any) => {
    if(isNewBooks) {
      return `${URL}${search}${category === "all" ? "" : "+subject:" + category}&startIndex=0&maxResults=30&orderBy=${sorting}`;
    } else {
      return `${URL}${search}${category === "all" ? "" : "+subject:" + category}
        &startIndex=${props.appState.allInformation.value.lastPage}&maxResults=30&orderBy=${sorting}`;
    };
  };

  async function getBooks() {
    if(!search) return;
    try {
      setIsLoaded(true);
      let promise = await fetch(getUrl(true));
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
    if(!search) return;
    if(props.appState.allInformation.value.allBooks.length < 29) return;
    try {
      setIsLoaded(true);
      let promise = await fetch(getUrl(false));
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
    const handleClick = (event: any) => {
      if(event.key === "Enter") {
        getBooks();
      };
    };
    window.addEventListener('keypress', handleClick);
  }, [])


  return (
    <div className={Boolean(isLoaded) ? 'loader' : "app"}>

      <div className={Boolean(isLoaded) ? 'loader-led' : "loader-none"}>Loadind...</div>

      <Header />

      <div className='content'>

        <Search enterText={enterText} getBooks={getBooks} search={search}/>

        <Selector changeCategory={changeCategory} changeSorting={changeSorting}/>

        <Routes>
          <Route path="/" element={
            <Books
              allItems={allItems}
              getAllBooks={props.appState}
              LoadMoreBooks={getMoreBooks}
              setIsLoaded={setIsLoaded}
              chooseBook={props.dispatch}
            />
          }/>

          <Route path="/*" element={
            <Book
              setIsLoaded={setIsLoaded}
              getState={props.appState.allInformation.value}
            />
          }/>
        </Routes>


      </div>

    </div>
  );
};

export default App