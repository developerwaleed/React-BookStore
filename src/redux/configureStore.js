import { combineReducers, createStore } from 'redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  category: categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
