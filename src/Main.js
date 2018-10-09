import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';

class Main extends React.Component {

  updateBook = (book, shelf, isNew) => {
    this.props.onUpdateBook(book, shelf, isNew)
  }

  render() {
    const { books, bookIdsByShelf } = this.props;
    const shelves = Object.keys(bookIdsByShelf)
    let booksByShelf = {}
    shelves.forEach(shelf => {
      booksByShelf[shelf] = [];
      booksByShelf[shelf] = books.filter(book => (bookIdsByShelf[shelf].indexOf(book.id) !== -1))
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
                onUpdateBook={this.updateBook} />
              )
            ))}
          </div>
        </div>
        <Link className="open-search" to="/search"><span>Add a Book</span></Link>
      </div>
    )
  }
}

export default Main;