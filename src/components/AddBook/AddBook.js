import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import style from './AddBook.module.css';

const AddBook = () => {
  const dispatch = useDispatch();
  // const [book, setBook] = useState({
  //   title: '',
  //   author: '',
  // });
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  // const handleChangeinput = (e) => {
  //   const fieldName = e.target.name;
  //   if (fieldName === 'title') {
  //     setBook({ title: e.target.value, author: book.author });
  //   }
  //   if (fieldName === 'author') {
  //     setBook({ title: book.title, author: e.target.value });
  //   }
  // };

  const handleSubmitbtn = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, id: uuidv4() }));
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
