import React from 'react';
import { Link } from 'react-router-dom';
import ShelfPicker from './ShelfPicker';

class Book extends React.Component {
  
  updateBook = (book, shelf) => {
    // console.log(book, shelf)
    this.props.onUpdateBook(book, shelf)
  }

  render() {
    const { book } = this.props;
    const title = book.title;
    // Reduce book.authors array to a comma separated concat string 
    const authors = book.authors.reduce((prev, val) => (`${prev}, ${val}`));
    const imgUrl = book.imageLinks.thumbnail;
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imgUrl}")` }}></div>
            <ShelfPicker
              onUpdateBook={this.updateBook}
              book={book} />
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book;