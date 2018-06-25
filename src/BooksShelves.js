import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import BooksShelf from './BooksShelf.js'


class BooksShelves extends Component {

	state = {
		value: ''
	}

	render () {

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
						{ Object.keys(category).map((key, index) => {
							const match = new RegExp(escapeRegExp(key))
							let filteredBooks  = books.filter((bk) => match.test(bk.shelf));

						 	return(	<BooksShelf key = {key} 
								 		books ={filteredBooks} 
								 		shelfTitle={category[key]} 
								 		keyVal={key} 
								 		index ={index}/>)
							})	
						}
						</div>
					</div>							
				</div>
			</div>
			)
	}

}

export default BooksShelves
