/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/books/books';
import Book from '../Book/Book';

const BookList = ({ fetchBooks, booksData }) => {
  useEffect(() => {
    fetchBooks();
  }, []);
  const bookState = useSelector((state) => state.books);
  const books = Object.keys(bookState).map((element) => (
    <Book
      key={element}
      id={element}
      title={bookState[element][0].title}
      author={bookState[element][0].author}
    />
  ));

  return <>{books}</>;
};

const mapStateToProps = (state) => ({
  booksData: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
