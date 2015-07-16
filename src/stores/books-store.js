'use strict';

import {
  ADD_BOOK,
  BEGIN_CREATING_BOOK,
  SUCCESS_CREATING_BOOK,
  ERROR_CREATING_BOOK
} from '../constants/books-constants';


export default function books(state = [], action) {

  switch (action.type) {

    case ADD_BOOK:
      return [...state, action.payload];

    case BEGIN_CREATING_BOOK:
      return state;

    case SUCCESS_CREATING_BOOK:
      return [...state, action.payload];

    case ERROR_CREATING_BOOK:
      return state;

    default:
      return state;
  }
}
