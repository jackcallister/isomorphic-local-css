import { ADD_BOOK } from '../constants/books-constants';

export function addBook(book) {
  return {
    data: book,
    type: ADD_BOOK
  };
}
