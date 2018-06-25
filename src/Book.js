import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'


class Book extends Component {
	state = {
		shelf: ''
	}
	onBookShelfChanged = (shelf) => {
		this.setState({
			shelf: shelf
		})
	}

render () {

	const {book, shelf} = this.props
	let SelectedShelf
	if(this.state.shelf===''){
		SelectedShelf = shelf
	} else{
		SelectedShelf = this.state.shelf
	}
	return (
		<div className="book">
			<div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
				</div>
					<div className="book-shelf-changer">
                      <select value={SelectedShelf} onChange = {(event) => this.onBookShelfChanged(event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
			</div>
			 <div className="book-title">{book.title}</div>
             <div className="book-authors">{[...book.authors].map((auth) => (auth)+', \r\n')}</div>
		</div>	
	)
}

}



export default Book