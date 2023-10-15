import React from "react";
import * as css from "./Project.module.css";

export default function Project({
  title,
  dates,
  link,
  featuredImage,
  children,
}) {
  const projectHeader = link ? (
    <a href={link} target="_blank" rel="noreferrer">
      <h1>{title}</h1>
    </a>
  ) : (
    <h1>{title}</h1>
  );

  return (
    <div className={css.project}>
      <div className={css.image}>{featuredImage}</div>
      <div className={css.content}>
        {projectHeader}
        <h2>{dates}</h2>
        {children}
      </div>
    </div>
  )
}
