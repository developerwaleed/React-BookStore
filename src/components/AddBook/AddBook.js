import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../../redux/books/books';
import style from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmitbtn = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(
        createBook({
          item_id: uuidv4(),
          category: null,
          title,
          author,
        }),
      );
    }
    setTitle('');
    setAuthor('');
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className={`${style.input} ${style.titleInput}`}
            name="author"
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
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
