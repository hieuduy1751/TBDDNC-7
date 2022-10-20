import * as constants from './constants';

export interface State {
  books: Book[]
}

export interface Book {
  id: number,
  name: string,
  author: boolean,
  published_year: number,
  image_url: string,
}

export const initialState: State = {
  books: []
}

export default function StoreReducer(state: State, action: any) {
  switch (action.type) {
    case constants.SET_BOOKS:
      return {
        books: action.payload
      }
    case constants.ADD_BOOK:
      return {
        books: [action.payload, ...state.books]
      };
    case constants.DELETE_BOOK:
      return {
        books: state.books.filter(book => book.id !== action.payload)
      };
    case constants.UPDATE_BOOK:
      return {
        books: state.books.map(book => book.id === action.payload.id ? action.payload : book)
      };
    default:
      return state;
  }
}