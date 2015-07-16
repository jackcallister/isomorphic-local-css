'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import * as BooksActions from '../actions/books-actions';

class Books extends React.Component {

  addBook() {
    this.props.addBook({ id: 3, title: 'Sapiens' });
  }

  renderBooks() {
    return this.props.books.map((book) => {
      return (
        <li key={book.id}>{book.title}</li>
      )
    });
  }

  render() {
    const books = this.renderBooks();

    return (
      <div>
        <ul>
          {books}
        </ul>
        <span onClick={e => this.addBook(e)}>Add a book</span>
      </div>
    );
  }
}

function select(state) {
  return { books: state.books };
}

class BooksContainer extends React.Component {
  render() {
    return (
      <Connector select={select}>
        {({ books, dispatch }) =>
          <Books books={books} {...bindActionCreators(BooksActions, dispatch)} />
        }
      </Connector>
    );
  }
}

export default BooksContainer;


// o