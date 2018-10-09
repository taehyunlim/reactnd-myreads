import React from 'react';

class ShelfPicker extends React.Component {

  handleChange = (e) => {
    const shelf = e.target.value, 
      book = this.props.book,
      prevShelf = this.props.shelf
    if (prevShelf === 'none') {
      this.props.onUpdateBook(book, shelf, true)
    } else {
      this.props.onUpdateBook(book, shelf, false)
    }
    
  }
  render() {
    return(
      <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfPicker;