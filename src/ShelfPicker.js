import React from 'react';

class ShelfPicker extends React.Component {
  // Handles shelf selection changes and update to its top-level parent component state
  handleChange = (e) => {
    const shelf = e.target.value, 
      book = this.props.book,
      prevShelf = this.props.shelf
    if (prevShelf === 'none') {
      // If the shelf is currently 'none' then append the book object to the list in the top-level state
      this.props.onUpdateBook(book, shelf, true)
    } else {
      // Otherwise, only update bookIdsByShelf object
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