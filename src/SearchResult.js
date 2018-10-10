import React from 'react';
import Book from './Book';

const SearchResult = (props) => {
  const { books, bookIdsByShelf } = props;
  const shelves = Object.keys(bookIdsByShelf)
  let hash = {}
  shelves.forEach(shelf => {
    bookIdsByShelf[shelf].forEach(id => {
      hash = Object.assign({[id]: shelf}, hash)
    })
  })
  const booksWithShelf = books.map(book => (
    Object.assign({"shelf": (hash[book.id]) ? hash[book.id] : "none"}, book)
  ))

  return(
    <div className="search-books-results">
      <ol className="books-grid">
        {booksWithShelf.length > 0 && 
          booksWithShelf.map((book) => (
            <Book
              key={book.id}
              book={book}
              shelf={book.shelf}
              onUpdateBook={props.onUpdateBook} />
          ))
        }
      </ol>
    </div>
  )
} 

export default SearchResult;