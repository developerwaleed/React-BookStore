import './App.css';
import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/NavBar/NavBar';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="React-BookStore/">
            <Route index element={<Books />} />
            <Route path="CATEGORIES" element={<Categories />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
