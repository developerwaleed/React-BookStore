import React from 'react';
import style from './Book.module.css';

const Book = (props) => {
  return (
      <div className={style.bookCard}>
        <div className={style.bookinfo}>
          <ul>
            <li className={`${style.SchoolOf} ${style.TextStyle5}`}>Action</li>
            <li className={style.title}>{props.title}</li>
            <li className={`${style.SuzanneCollins} ${style.TextStyle6}`}>
            {props.author}
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
          <div className={style.circularProgress}></div>
          <div className={style.progStats}>
              <div className={style.percentage}>64%</div>
              <div className={style.isCompleted}>Completed</div>
          </div>
          <div className={style.progDivider}></div>
          <div>
            <div className={style.currentChapter}>CURRENT CHAPTER</div>
            <div className={style.chapNumber}>Chapter 17</div>
          <div className={style.progressBtnDiv}>
            <button className={style.updateProgress}>Update Progress</button>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Book;
