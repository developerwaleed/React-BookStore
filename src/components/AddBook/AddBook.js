import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import style from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });
  const handleChangeinput = (e) => {
    const fieldName = e.target.name;
    if (fieldName === 'title') {
      setBook({ title: e.target.value, author: book.author });
    }
    if (fieldName === 'author') {
      setBook({ title: book.title, author: e.target.value });
    }
  };

  const handleSubmitbtn = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
  };
  return (
    <>
      <div className={style.dividerHorizontal} />
      <section className={style.Container}>
        <h2 className={style.formTitle}>ADD NEW BOOK</h2>
        <form action="./" className={style.addBookForm}>
          <input
            className={`${style.input} ${style.titleInput}`}
            name="title"
            id="bookTitle"
            type="text"
            placeholder="Book title"
            onChange={handleChangeinput}
            required
          />
          <input
            className={`${style.input} ${style.titleInput}`}
            name="author"
            type="text"
            placeholder="Book Author"
            onChange={handleChangeinput}
            required
          />
          <button
            type="button"
            className={style.btnAddBook}
            onClick={handleSubmitbtn}
          >
            ADD BOOK
          </button>
        </form>
      </section>
    </>
  );
};

export default AddBook;
