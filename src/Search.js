import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI.js'
import { Debounce } from 'react-throttle'

class Search extends Component {
	state = {
		query: '',
		booksSearchResult: []
	}
	updateQuery = (query) => {

		this.setState({
			query: query
		})
	}
	clearQuery = () => {
		this.state({
			query: ''
		})
	}

	searchBooks = (query) => {
      BooksAPI.search(query).then((books) => {
        this.setState({booksSearchResult: books})
      })
    }

	handleTextChange = (query, event) => {
		this.updateQuery(query)
		this.searchBooks(query)
	}

render() {
	const{books, onBookShelfChanged} = this.props
	let{query, booksSearchResult} = this.state


	if(booksSearchResult !== undefined && booksSearchResult !== null && booksSearchResult.length>0) {
		
		//Set book shelf to the same value in the main page
		if(books !== undefined && books !== null && books.length >0)
		{
			let bookWithShelf
			booksSearchResult.map(function(sbook, index) {
				bookWithShelf = books.find(b => b.id == sbook.id)
				if(bookWithShelf) {
					sbook.shelf = bookWithShelf.shelf
				} else {
					// set book shelf to None
					sbook.shelf ='none'
				}
			})	
		}
	}

	let booksSearch = booksSearchResult

	let filteredBooks
	if (query) {
		const match = new RegExp(escapeRegExp(query.trim()), 'i')
		if(booksSearch !== undefined && booksSearch !== null && booksSearch.length > 0 ){
		  	let bookAuthors
		
			filteredBooks = booksSearch.filter((book) => (match.test(book.title) ||
			  match.test(booksSearch.authors? bookAuthors = booksSearch.authors.map((a) => (a) +' | ') : '')
			  ))
		}
	} else {
		filteredBooks = booksSearch
	}
	let booksHasValue = false
	if(filteredBooks !== undefined && filteredBooks !== null && filteredBooks.length >0) {
		filteredBooks.sort(sortBy('title'))
		booksHasValue = true
	} else{
		if(booksSearch !== undefined && booksSearch.length > 0){
			booksHasValue = true
			filteredBooks = booksSearch
		}
	}
	
	let handleBookShelfChanged = (book, shelf) => {
			onBookShelfChanged(book, shelf)
		}

	return(
			<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
              	<Debounce time="1000" handler="onChange">
	                <input type="text" placeholder="Search by title or author"
						onChange = {(event) => this.handleTextChange(event.target.value, event)}
	                />
                </Debounce>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
               {
              		booksHasValue && 
              		(filteredBooks.map((book) => (
							<li  key={book.id}>
								<Book book={book} shelf={book.shelf} onBookShelfChanged = {handleBookShelfChanged}/>
							</li>
							))
					)
				}
              </ol>
            </div>
          </div>
		)
}

}

export default Search