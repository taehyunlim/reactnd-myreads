# MyReads

This is a fork based on [the starter template](https://github.com/udacity/reactnd-project-myreads-starter) for the final assessment project for Udacity's React Fundamentals course. 

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Organization
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for users
├── package.json # npm package manager file. 
├── public
│   ├── favicon.ico 
│   └── index.html
└── src
    ├── App.css 
    ├── App.js # This is the root of app. Contains static HTML and the top-level state as well as intial data fetch via componentDidMount.
    ├── Main.js # Main page with the list of user's books
    ├── BookShelf.js # Component that contains and organizes books by shelf (currentlyReading, wantToRead, or read). Holds books. 
    ├── Book.js # Book component that holds shelf picker. 
    ├── ShelfPicker.js # Control that allows user to move books between shelves
    ├── Search.js # Main search page that holds search results and search term input field. 
    ├── SearchResult.js #  Displays book instances based on the search term.
    ├── App.test.js # Used for testing. Provided with Create React App. 
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. 
    └── index.js # Modified to inlcude React Router library
```
## Application React Components Outline
![Outline representation of react components used in the app][myReadsOutline.png]

## Backend Server
A backend server has been provided with the template. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods required to perform necessary server-side operations and the details for these methods can be found [here](https://github.com/udacity/reactnd-project-myreads-starter#backend-server).

## Important 
(Copied from [the original repo](https://github.com/udacity/reactnd-project-myreads-starter#important))
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## To Do

* Use PropTypes to validate props used in Books.js
* Auto-complete search queries based on the array from [SEARCH_TERMS.md](SEARCH_TERMS.md).