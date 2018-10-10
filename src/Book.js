import React from 'react';
import ShelfPicker from './ShelfPicker';
// TO DO: Add PropTypes
// import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, shelf } = props;
  const title = book.title;
  // Reduce book.authors array to a comma separated concat string 
  const authors = (book.authors) ? book.authors.reduce((prev, val) => (`${prev}, ${val}`)) : '';
  const imgUrl = (book.imageLinks && book.imageLinks.thumbnail) ? book.imageLinks.thumbnail: '';
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div 
            className="book-cover" 
            style={{ width: 128, height: 193, backgroundImage: `url("${imgUrl}")` }}
          ></div>
          <ShelfPicker
            onUpdateBook={props.onUpdateBook}
            book={book}
            shelf={shelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )
}

export default Book;