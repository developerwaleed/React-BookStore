import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';

const BookList = () => {
  const bookState = useSelector((state) => state.books);

  const books = bookState.map((element) => (
    <Book key={element.id} title={element.title} author={element.author} />
  ));

  return <>{books}</>;
};

export default BookList;
