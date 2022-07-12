// Action Types
const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

const initialState = [];

// Action Creator

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (id) => ({ type: REMOVE_BOOK, id });