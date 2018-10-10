import React from 'react';
import Book from './Book'

const BookShelf = (props) => {
  const { shelf, books } = props;
  let shelfName ='';
  switch (shelf) {
    case "currentlyReading": shelfName = "Currently Reading";
      break;
    case "read": shelfName = "Read";
      break;
    case "wantToRead": shelfName = "Want to Read";
      break;
    default: shelfName = shelf
  }

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              shelf={shelf}
              onUpdateBook={props.onUpdateBook} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;