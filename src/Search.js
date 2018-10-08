import React from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';
import SearchResult from './SearchResult';

class Search extends React.Component {
  state = {
    query: '',
    books: []
  }

  updatedQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    BooksAPI.search(query)
      .then((books) => {
        if (books && !books.error) {
          this.setState(() => ({
            books
          }))
        } else if (books && books.error) {
          this.setState(() => ({
            books: []
          }))
        }
      })
  }
  clearQuery = () => {
    this.updatedQuery(``)
  }

  updateBook = (book, shelf) => {
    this.props.onUpdateBook(book, shelf)
  }

  render() {
    const { query } = this.state;
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/"><span>Go back to Main</span></Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              value={query} 
              onChange={(e) => this.updatedQuery(e.target.value)}
              placeholder="Search by title or author"/>

          </div>
        </div>
        {this.state.books.length > 0 &&
          <SearchResult 
            books={this.state.books}
            bookIdsByShelf={this.props.bookIdsByShelf}
            onUpdateBook={this.updateBook} />
        }
      </div>
    )
  }
}

export default Search;