import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import Search from './Search';
import Main from './Main';

class BooksApp extends React.Component {
  state = {
    books: [],
    bookIdsByShelf: {}
  }
  
  componentDidMount() {
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

  updateBook = (book, shelf, isNew) => {
    BooksAPI.update(book, shelf)
      .then((res) => {
        console.log('updateBooksResponse', res);
        this.setState( () => ({ 
          bookIdsByShelf: res,
          books: (isNew) ? [...this.state.books, book] : this.state.books
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
            bookIdsByShelf={this.state.bookIdsByShelf}
            onUpdateBook={(book, shelf, isNew) => {
              this.updateBook(book, shelf, isNew)
              history.push('/')
            }} />
        )} />
      </div>
    )
  }
}

export default BooksApp
