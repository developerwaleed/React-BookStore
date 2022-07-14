import axios from 'axios';

// Action Types
const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/C7dxiTeoPKlMxBtWHPEw/books';

// Reducers
const bookReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      // return [...state, action.payload];
      return action.payload;
    case REMOVE_BOOK: {
      return [...state.filter((book) => book.id !== action.id)];
    }
    default:
      return state;
  }
};

// Action Creator

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: { ...book },
});

export const fetchBooks = () => (dispatch) => {
  axios
    .get(BASE_URL)
    .then((respose) => {
      const books = respose.data;
      console.log('inside Function= ', books);
      dispatch(addBook(books));
    })
    .catch((error) => {
      const errorMsg = error.message;
      console.log(errorMsg);
    });
};

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export default bookReducer;
