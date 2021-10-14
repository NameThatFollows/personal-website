import React from 'react';
import Img from 'gatsby-image';

import * as css from './Project.module.css';

export default function Project({ node }) {
  const endDate = node.frontmatter.endDate === "Invalid date" ? "Present" : node.frontmatter.endDate;
  const projectHeader = node.frontmatter.link
    ? <a href={node.frontmatter.link} target='_blank' rel='noreferrer'><h1>{node.frontmatter.title}</h1></a>
    : <h1>{node.frontmatter.title}</h1>
  return (
    <div className={css.project}>
      <div className={css.image}>
        <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
      </div>
      <div className={css.content}>
        {projectHeader}
        <h2>{node.frontmatter.startDate} - {endDate}</h2>
        <div dangerouslySetInnerHTML={{__html: node.html}} />
      </div>
    </div>
  );
}
