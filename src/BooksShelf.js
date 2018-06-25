import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book.js'


class BooksShelf extends Component {

	state = {
		mode:'DisplayBooks', //Or  SearchBooks
		book: ''
		
	}

	

	render() {
		
		const {books, shelfTitle, keyVal, index} = this.props
	
		 return (
			<div className="bookshelf" key={index}>
				<h2 className="bookshelf-title">{shelfTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{books.map((book) => (
							<li  key={book.id}>
								<Book book={book} shelf={keyVal}  />
							</li>
							))
						}
					</ol>
				</div>
			</div>)

	}
}

export default BooksShelf