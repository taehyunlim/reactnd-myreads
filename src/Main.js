import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';

const Main = (props) => {
  const { books, bookIdsByShelf } = props;
  const shelves = Object.keys(bookIdsByShelf)
  let booksByShelf = {}
  shelves.forEach(shelf => {
    booksByShelf[shelf] = [];
    booksByShelf[shelf] = books.filter(book => (bookIdsByShelf[shelf].find(id => id === book.id)))
  })

  return(
    <div>
      <div className="list-books-content">
        <div>
          {Object.keys(booksByShelf).map((shelf) =>(
            (booksByShelf[shelf].length > 0 &&
              <BookShelf 
              key={shelf}
              shelf={shelf}
              books={booksByShelf[shelf]}
              onUpdateBook={props.onUpdateBook} />
            )
          ))}
        </div>
      </div>
      <Link className="open-search" to="/search"><span>Add a Book</span></Link>
    </div>
  )
}

export default Main;