import React from 'react';
import Book from '../Book/Book';
import style from './BookList.module.css';
const BookList = () => {
  return (
    <>
      <div className={style.container}>
          <Book title="Waleed" author="amjad" />
          <Book title="no" author="yes" />
          <Book title="oh" author="wow" />
      </div>
    </>
  );
};

export default BookList;
