'use strict';

import { ADD_BOOK } from '../constants/books-constants';

export default function books(state = [{ id: 1, title: 'Game of Thrones' }], action) {

  switch (action.type) {

    case ADD_BOOK:
      return [...state, action.data];
    default:
      return state;
  }
}
