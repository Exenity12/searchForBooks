import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import  './App.css';


const url = 'https://www.googleapis.com/books/v1/volumes/'

const Book = (props) => {
  const [activeBook, setActiveBook] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const location = useLocation();
  const thisLocation = location.pathname.substring(1, location.length)

  useEffect(() => {
    getThisBook(thisLocation);
  }, [])


  async function getThisBook(thisLocation) {
    try {
      props.setIsLoaded(true);
      let promise = await fetch(url + thisLocation);
      let book = await promise.json();
      console.log(book)
      setActiveBook(book)
      setIsReady(true)
      props.setIsLoaded(false);
    } catch(err) {
      console.log(err);
    };
  };

  return (
    <div className="unique-book-item">
      {isReady ? 
        <div className="unique-book-item-wrap">

          <div className="unique-book-item-wrap__logo">
            <NavLink to="/" className="unique-book-item__return">Back</NavLink>
            
            <div className='unique-book__wrap'>
              <img src={Boolean(activeBook.volumeInfo.imageLinks) ? activeBook.volumeInfo.imageLinks.thumbnail : null} className='unique-book__wrap-image'></img>
            </div>
          </div>


          <div className='unique-book__description'>
            <h3 className='unique-book__description-title'>
              {activeBook.volumeInfo.title}
            </h3>

            <span className='unique-book__description-category'>
              {activeBook.volumeInfo.categories}
            </span>

            <span className='unique-book__description-authors'>
              {activeBook.volumeInfo.authors}
            </span>

            <div className='unique-book__description-other'
              dangerouslySetInnerHTML={{__html: activeBook.volumeInfo.description}}>
            </div>
          </div>
        </div>
        : null}
    </div>
  );
};

export default Book;