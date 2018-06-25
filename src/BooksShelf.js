import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book.js'


class BooksShelf extends Component {

	state = {
		mode:'DisplayBooks' //Or  SearchBooks
		
	}

	render() {
		
		const {books} = this.props
		const category = {
			currentlyReading: 'Currently Reading',
			wantToRead: 'Want To Read',
			read: 'Read'
		}

		return (
			<div>			
				<div className="list-books" >
					<div className="list-books-title">
						<h1>My Reads</h1>
					</div>
				
					<div className="list-books-content">
						<div>
						{ Object.keys(category).map(function(key, index) {
							const match = new RegExp(escapeRegExp(key))
							let filteredBooks  = books.filter((bk) => match.test(bk.shelf))
						 return (
							<div className="bookshelf" key={index}>
								<h2 className="bookshelf-title">{category[key]}</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{filteredBooks.map((book) => (
											<li  key={book.id}>
												<Book book={book} shelf={key} />
											</li>
											))
										}
									</ol>
								</div>
							</div>)
						})	
						}
						</div>
					</div>				
				
			</div>
			</div>
			)
	}
}

export default BooksShelf