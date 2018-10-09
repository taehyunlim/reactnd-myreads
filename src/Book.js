import React from 'react';
import ShelfPicker from './ShelfPicker';
// TO DO: Add PropTypes
// import PropTypes from 'prop-types';

class Book extends React.Component {
  
  updateBook = (book, shelf, isNew) => {
    // console.log(book, shelf)
    this.props.onUpdateBook(book, shelf, isNew)
  }

  render() {
    const { book, shelf } = this.props;
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
              onUpdateBook={this.updateBook}
              book={book}
              shelf={shelf} />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book;