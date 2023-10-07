import { NavLink } from 'react-router-dom';

import  '../App.css';

interface bookProp {
  id: string;
  title: string;
  index: any;
  img: string;
  category: string;
  authors: string;
};

const Book = (props: bookProp) => {
  return (
    <NavLink key={props.index} className='book' to={"/" + props.id} id={props.index}>
      <div className='book__wrap' id={props.index}>
        <img
          className='book__wrap-image'
          id={props.index}
          alt="load"
          src={props.img}>
        </img>
      </div>

      <div className='book__description' id={props.index}>
        <h3 className='book__description-title' id={props.index}>
          {props.title}
        </h3>

        <span className='book__description-category' id={props.index}>
          {props.category}
        </span>

        <span className='book__description-authors' id={props.index}>
          {props.authors}
        </span>
      </div>
    </NavLink>
  )
}

const Books = (props: any) => {
  return (
    <div className="books">
      {Boolean(props.getAllBooks.allInformation.value.isArrayOfBooks) ? 
      <div className="books-wrap">
        <div className="books__total-elements">total elements: {props.allItems}</div>
        <div>
          
        </div>
        <div className="book-wrap">
          {props.getAllBooks.allInformation.value.allBooks.map((book: any, index: number) => (
            <Book
              key={index}
              id={book.id}
              title={book.volumeInfo.title}
              index={index}
              img={Boolean(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.smallThumbnail : null}
              category={book.volumeInfo.categories}
              authors={book.volumeInfo.authors}
            />
          ))}
        </div>
        {props.getAllBooks.allInformation.value.allBooks.length >= 30 ? <button onClick={props.LoadMoreBooks} className='book__button-load'>Load more</button> : null}
      </div>
      : null}
    </div>
  );
};

export default Books;