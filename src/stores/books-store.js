'use strict';

import { ADD_BOOK } from '../constants/books-constants';

export default function books(state = [], action) {

  switch (action.type) {

    case ADD_BOOK:
      return [...state, action.data];
    default:
      return state;
  }
}
