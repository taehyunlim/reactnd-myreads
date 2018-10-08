import React from 'react';
// import { Link } from 'react-router-dom';

class ShelfPicker extends React.Component {
  state = {
    selectedShelf: this.props.shelf
  }
  handleChange = (e) => {
    const shelf = e.target.value, 
    book = this.props.book;
    this.setState({selectedShelf: shelf});
    // console.log(book, shelf)
    this.props.onUpdateBook(book, shelf)
  }
  render() {
    return(
      <div className="book-shelf-changer">
        <select value={this.state.selectedShelf} onChange={this.handleChange}>
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