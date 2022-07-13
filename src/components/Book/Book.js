import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import style from './Book.module.css';

const Book = (bookInfo) => {
  const dispatch = useDispatch();
  const handleRemovebtn = (e) => {
    const { id } = e.target.parentElement.parentElement.parentElement;
    dispatch(removeBook(Number(id)));
  };
  const { title, author, id } = bookInfo;

  return (
    <div className={style.bookCard} id={id}>
      <div className={style.bookinfo}>
        <ul>
          <li className={`${style.SchoolOf} ${style.TextStyle5}`}>Action</li>
          <li className={style.title}>{title}</li>
          <li className={`${style.SuzanneCollins} ${style.TextStyle6}`}>
            {author}
          </li>
        </ul>
        <ul className={style.btnHolder}>
          <button
            type="button"
            className={`${style.btnTextStyle} ${style.TextStyle6}`}
          >
            Comments
          </button>
          <div className={style.divider} />
          <button
            type="button"
            className={`${style.btnTextStyle} ${style.TextStyle6}`}
            onClick={handleRemovebtn}
          >
            Remove
          </button>
          <div className={style.divider} />
          <button
            type="button"
            className={`${style.btnTextStyle} ${style.TextStyle6}`}
          >
            Edit
          </button>
        </ul>
      </div>
      <div className={style.bookProgress}>
        <div className={style.circularProgress} />
        <div className={style.progStats}>
          <div className={style.percentage}>64%</div>
          <div className={style.isCompleted}>Completed</div>
        </div>
        <div className={style.progDivider} />
        <div>
          <div className={style.currentChapter}>CURRENT CHAPTER</div>
          <div className={style.chapNumber}>Chapter 17</div>
          <div className={style.progressBtnDiv}>
            <button type="button" className={style.updateProgress}>
              Update Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
