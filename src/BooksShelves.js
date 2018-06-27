import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import BooksShelf from './BooksShelf.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class BooksShelves extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		onBookShelfChanged: PropTypes.func.isRequired
	}

	state = {
		value: ''
	}

	render () {

		const {books, onBookShelfChanged} = this.props
		const category = {
			currentlyReading: 'Currently Reading',
			wantToRead: 'Want To Read',
			read: 'Read'
		}

		let handleBookShelfChanged = (book, shelf) => {
			onBookShelfChanged(book, shelf)
		}

		return (
			<div>			
				<div className="list-books" >
					<div className="list-books-title">
						<h1>My Reads</h1>
					</div>
				
					<div className="list-books-content">
						<div>
						{ (books !== undefined && books !== null && books.length > 0) && (
								Object.keys(category).map((key, index) => {
								const match = new RegExp(escapeRegExp(key))
								let filteredBooks  = books.filter((bk) => match.test(bk.shelf));

							 	return(	<BooksShelf key = {key} 
									 		books ={filteredBooks} 
									 		shelfTitle={category[key]} 
									 		keyVal={key} 
									 		index ={index}
									 		BookShelfChanged = {handleBookShelfChanged}
									 		/>)
								})	
							)
						}
						</div>
					</div>							
				</div>
				<div className="open-search">
              		<Link to="/Search">Add a book</Link>
          		</div>
			</div>
			
			)
	}

}

export default BooksShelves
