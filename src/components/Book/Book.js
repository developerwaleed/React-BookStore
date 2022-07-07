import React from 'react';
import style from './Book.module.css';

const Book = () => {
  return (
    <div className={style.container}>
      <div className={style.bookinfo}>
        <ul>
          <li className={`${style.SchoolOf} ${style.TextStyle5}`}>Action</li>
          <li className={style.title}>The Hunger Games</li>
          <li className={`${style.SuzanneCollins} ${style.TextStyle6}`}>
            Suzanne Collins
          </li>
        </ul>
        <ul className={style.btnHolder}>
          <button className={`${style.btnTextStyle} ${style.TextStyle6}`}>
            Comments
          </button>
          <div className={style.divider}></div>
          <button className={`${style.btnTextStyle} ${style.TextStyle6}`}>
            Remove
          </button>
          <div className={style.divider}></div>
          <button className={`${style.btnTextStyle} ${style.TextStyle6}`}>
            Edit
          </button>
        </ul>
      </div>
      <div className={style.bookProgress}>
        
      </div>
    </div>
  );
};

export default Book;
