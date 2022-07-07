import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const Navbar = () => (
  <nav className={style.navBar}>
    <span className={style.BookstoreCMS}>Bookstore CMS</span>
    <ul className={style.linkContainer}>
      <li className={`${style.BOOKS} ${style.TextStyle3}`}>
        <Link to="/React-BookStore">BOOKS</Link>
        </li>
      <li className={`${style.CATEGORIES} ${style.TextStyle3}`}>
        <Link to="/React-BookStore/CATEGORIES">CATEGORIES</Link>
        </li>
    </ul>
    <div className={style.Oval}>
      <span className={`material-symbols-outlined ${style.Mask}`}>person</span>
    </div>
  </nav>
);

export default Navbar;
