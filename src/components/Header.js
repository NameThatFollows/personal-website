import React from 'react';
import { Link } from 'gatsby';

import css from "./Header.module.css"

export default function Header(props) {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Lists', path: '/lists' },
    // { name: 'Media', path: '/media' },
    { name: 'Résumé', path: '/resume' },
  ];
  const navLinks = pages.map((pageInfo) => {
    return (
      <li key={pageInfo.name}>
        <Link to={pageInfo.path} className={props.active === pageInfo.name ? css.active : ''}>
          {pageInfo.name}
        </Link>
      </li>
    )
  });
  return (
    <div className={css.header}>
      <div className={css.navigation}>
        <h1>James J. Lu</h1>
        <nav>
          {navLinks}
        </nav>
      </div>
    </div>
  );
}