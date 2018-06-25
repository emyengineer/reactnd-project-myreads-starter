import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book.js'
import PropTypes from 'prop-types'


class BooksShelf extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		shelfTitle: PropTypes.string.isRequired,
		keyVal: PropTypes.string.isRequired,
		index: PropTypes.number.isRequired,
		BookShelfChanged: PropTypes.func.isRequired 
	}

	state = {
		mode:'DisplayBooks', //Or  SearchBooks
		book: '',
		shelf: ''		
	}
	render() {
		
		const {books, shelfTitle, keyVal, index, BookShelfChanged } = this.props

		let handleBookShelfChanged = (book, shelf) => {
			BookShelfChanged(book, shelf)
		}

		//books are the filtered books foreach shelf
		 return (
			<div className="bookshelf" key={index}>
				<h2 className="bookshelf-title">{shelfTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map((book) => (
							<li  key={book.id}>
								<Book book={book} shelf={keyVal} onBookShelfChanged = {handleBookShelfChanged}/>
							</li>
							))
						}
					</ol>
				</div>
			</div>)

	}
}

export default BooksShelf