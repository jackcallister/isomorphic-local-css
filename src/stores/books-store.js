'use strict';

import Immutable from 'immutable';

import {
  BEGIN_CREATING_BOOK,
  SUCCESS_CREATING_BOOK,
  ERROR_CREATING_BOOK
} from '../constants/books-constants';

const initialState = Immutable.fromJS({
  books: Immutable.List(),
  loading: true
});

export default function booksStore(state = initialState, action) {

  switch (action.type) {

    case BEGIN_CREATING_BOOK:
      return state.set('loading', true);

    case SUCCESS_CREATING_BOOK:
      const book = Immutable.fromJS(action.payload);

      return state.update('books', (books) => {
        return books.push(action.payload);
      }).set('loading', false);

    case ERROR_CREATING_BOOK:
      return state;

    default:
      return state;
  }
}
