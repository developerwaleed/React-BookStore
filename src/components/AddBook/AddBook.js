import React from 'react';
import style from './AddBook.module.css';

const AddBook = () => {
  return (
    <>
    <div className={style.dividerHorizontal}></div>
      <section className={style.Container}>
        <h2 className={style.formTitle}>ADD NEW BOOK</h2>
        <form action="./" className={style.addBookForm}>
          <input className={`${style.input} ${style.titleInput}`} type="text" placeholder='Book title' required Value />
          <select className={`${style.input} ${style.categoryInput}`}>
            <option value="Action">Action</option>
            <option value="Science">Science</option>
            <option value="Economy">Economy</option>
          </select>
        <button className={style.btnAddBook}>ADD BOOK</button>
        </form>
      </section>
    </>
  );
};

export default AddBook;
