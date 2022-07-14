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
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => dispatch(addBook(data)));
};

export const createBook = (book) => async (dispatch) => {
  await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  }).then(() => dispatch(fetchBooks()));
};

export const deleteBook = (id) => async (dispatch) => {
  const DELETE_URL = `${BASE_URL}/${id}`;

  await fetch(DELETE_URL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  }).then(() => dispatch(fetchBooks()));
};

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export default bookReducer;
