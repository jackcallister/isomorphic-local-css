import { createAction } from 'redux-actions';
import { createRemoteBook } from '../web-utils/books-web-utils';
import createAsyncAction from '../utils/create-async-action';

import {
  BEGIN_CREATING_BOOK,
  SUCCESS_CREATING_BOOK,
  ERROR_CREATING_BOOK
} from '../constants/books-constants';

function createBook() {
  return (dispatch) => {
    createAsyncAction({
      dispatch: dispatch,
      begin: BEGIN_CREATING_BOOK,
      success: SUCCESS_CREATING_BOOK,
      error: ERROR_CREATING_BOOK,
      promise: createRemoteBook
    });
  }
};

export {
  addBook,
  createBook
}
