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
    books: []
  }
  
  componentWillMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState( () => (
          {books}
        ))
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
            books={this.state.books} />
        )} />
        <Route path='/search' render={({ history }) => (
          <Search 
            books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
