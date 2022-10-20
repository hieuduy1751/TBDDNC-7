import { ADD_BOOK, DELETE_BOOK, SET_BOOKS, UPDATE_BOOK } from "./constants";
import { Book } from "./StoreReducer";

const setBooks = (books: Book[]) => {
  return {
    type: SET_BOOKS,
    payload: books,
  };
}

const addBook = (book: Book) => {
  return {
    type: ADD_BOOK,
    payload: book
  }
}

const deleteBook = (bookId: number) => {
  return {
    type: DELETE_BOOK,
    payload: bookId
  }
}

const updateBook = (book: Book) => {
  return {
    type: UPDATE_BOOK,
    payload: book
  }
}

export { setBooks, addBook, deleteBook, updateBook }