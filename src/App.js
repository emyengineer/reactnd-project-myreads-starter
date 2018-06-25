import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksShelves from './BooksShelves.js'
import './App.css'

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
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBookShelf = (book, newShelf) => {
    book.props.book.shelf = newShelf
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id ).concat([book.props.book])
    }))
    BooksAPI.update(book, newShelf)
    alert('updated')
  }

  render() {
    return (
      <div className = "app">
        <BooksShelves 
          books = {this.state.books}
          onBookShelfChanged = {this.updateBookShelf}
         />
      </div>
    )
  }
}

export default BooksApp
