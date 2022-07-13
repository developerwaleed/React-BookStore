import { v4 as uuidv4 } from 'uuid';

// Action Types
const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

// Reducers
const bookReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
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
  payload: { ...book, id: uuidv4() },
});

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

export default bookReducer;
