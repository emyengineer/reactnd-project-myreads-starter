# MyReads App Project
# Nano Degree project No. Seven

## Table of Contents

* [Instructions](#instructions)
    * [Definition](#Definition)
    * [Components](#Rules)
* [Install](#Install)
* [Run the project](#Run)
* [Contributing](#contributing)
* [Backend Server](#Backend Server)
* [About](#About)

## Instructions

##  My Reads App Project
# Definition
_Is a project built using **React**, it has two pages:
* _**main page**_ displays list of books and their shelves
        * There are three main book shelves `Currently Reading`,  `Want to Read` and `Read shelf`
        * The user is able to change book shelf 
* _**Search Page**_ allows to search for books and add them to any shelf as required
        There are specific searchable terms stated at 
    `https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md`
    * the user can search by book title or book author(s)_

# Project Components:
* The project has 4 main components
    *  Book.js component
    * BooksShelf.js
    * BooksShelves.js
    * Search.js
        
* _**The Book**_ component displays the book information e.g. image, title and authors.**On Book Shelf**  change state, the book is passed up to the app base where `updateBookShelf` handles the actual moving of the book shelf.

* _**BooksShelf**_ component displays one category of the books on a specific shelf.
    
* _**BooksShelves**_ component has the three different shelves 
        and has a method to handle book shelf state changes (to give it to the base App component)
        
* _**Search Components**_ : searchs the DB for a vailable books. It has two methods one to handle the search on text change functionality, and the second for handling book shelf change (passing this method from the Book  to the App component)

* _**Routing Functionality**_   
    The Routing and <Link> component is used.
    Wrapping the base component with <BrowserRouter> component.

# Install:
download all the files contained within `reactnd-project-myreads-starter` folder
with all subfolders .

# Run the project:
* _**cd**_ to your current project directory 
    run `npm install` and then `npm start ` and here you go :)
[reactnd-project-myreads-starter](https://emyengineer.github.io/reactnd-project-myreads-starter)
# Contributing
This code is developed and used search for help on some
* [REACT Course](https://courses.totalreact.com/p/advanced-react-free) 
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

# Why This Project?
_In the MyReads project,  create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application_


# About
_**Eman Zaghloul**_ a software engineer who used to work as C# .Net developer for many year.And has passion and desire to learn and build beautiful web sites.
after graduation from **FEND Nano Degree.**  


