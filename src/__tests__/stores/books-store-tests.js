import assert from 'assert';
import Immutable from 'immutable';
import booksStore from '../../stores/books-store';
import { book, books } from '../fixtures/books';

import {
  ADD_BOOK,
  BEGIN_CREATING_BOOK,
  SUCCESS_CREATING_BOOK,
  ERROR_CREATING_BOOK
} from '../../constants/books-constants';

const initialState = Immutable.fromJS({
  books: Immutable.List(),
  loading: true
});

describe('#booksStore', () => {

  describe(BEGIN_CREATING_BOOK, () => {
    it('sets loading to true', () => {
      const action = {
        type: BEGIN_CREATING_BOOK
      }

      const state = booksStore(initialState, action).toJS();
      const expectedState = { books: [], loading: true };

      assert.deepEqual(state, expectedState);
    });
  });

  describe(SUCCESS_CREATING_BOOK, () => {
    it('sets loading to false and sets book', () => {
      const action = {
        type: SUCCESS_CREATING_BOOK,
        payload: book
      }

      const state = booksStore(initialState, action).toJS();
      const expectedState = { books: books, loading: false };

      assert.deepEqual(state, expectedState);
    });
  });
});
