import React from "react";
import { Link } from "gatsby";

import * as css from "./Header.module.css";
import { s } from "../utils/singular";

export default function Header(props) {
  const pages = [
    { name: "Home", path: "/" },
    { name: `Project${s}`, path: "/projects" },
    { name: `List${s}`, path: "/lists" },
    { name: "Résumé", path: "/resume" },
  ];
  const navLinks = pages.map((pageInfo) => {
    return (
      <li key={pageInfo.name}>
        <Link
          to={pageInfo.path}
          className={props.active === pageInfo.path ? css.active : ""}
        >
          {pageInfo.name}
        </Link>
      </li>
    );
  });
  return (
    <div className={css.header}>
      <div className={css.navigation}>
        <h1>Jame{s} Lu</h1>
        <nav>{navLinks}</nav>
      </div>
    </div>
  );
}

export const Head = () => {
  return <title>Jame{s} Lu // @NameThatFollow{s}</title>;
}
