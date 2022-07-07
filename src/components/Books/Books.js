import React from 'react'
import BookList from '../BookList/BookList'
import AddBook from '../AddBook/AddBook'
import style from './Books.module.css'

const Books = () =>  {
  return (
    <>
    <div className={style.container}>
        <BookList />
        <AddBook />
    </div>
    </>
  )
}

export default Books;
