import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import Search from './Search';
import Main from './Main';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    bookIdsByShelf: {}
  }
  
  componentWillMount() {
    BooksAPI.getAll()
      .then((books) => {
        // Create a data model that is congruent to the response from updateBook
        // booksByShelf is simply an object with shelf names as attributes whose children are arrays of bookIds
        let bookIdsByShelf = {};
        books.forEach(book => {
          const shelf = book.shelf;
          const currentShelves = Object.keys(bookIdsByShelf);
          if (currentShelves.indexOf(shelf) === -1) {
            bookIdsByShelf[shelf] = [];
            bookIdsByShelf[shelf].push(book.id);
          } else {
            bookIdsByShelf[shelf].push(book.id);
          }
        })
        console.log(bookIdsByShelf)

        this.setState( () => ({
          books: books,
          bookIdsByShelf: bookIdsByShelf
        }))
      })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((res) => {
        console.log('updateBooksResponse', res);
        this.setState( () => ({ 
          bookIdsByShelf: res 
        }))
      })
  }

  render() {

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title"><h1>MyReads</h1></div>
        </div>
        <Route exact path='/' render={ () => (
          <Main
            books={this.state.books}
            bookIdsByShelf={this.state.bookIdsByShelf}
            onUpdateBook={this.updateBook} />
        )} />
        <Route path='/search' render={({ history }) => (
          <Search 
            books={this.state.books}
            onUpdateBook={this.updateBook} />
        )} />
      </div>
    )
  }
}

export default BooksApp
