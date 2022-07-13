import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';
import style from './Categories.module.css';

// const actions = bindActionCreators();
const Categories = () => {
  const categoryStatus = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        className={style.btn}
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
      <div className={style.statusContainer}>{categoryStatus}</div>
    </>
  );
};

export default Categories;
