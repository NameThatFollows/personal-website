import React from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';

import css from "./resume.module.css"

export default function Resume({ data }) {
  console.log(data);

  const sections = data.allMarkdownRemark.nodes.map((node) => {
    return (
      <div key={node.id} className={css.resumeSection}>
        <h1 className={css.resumeSectionTitle}>{node.frontmatter.title}</h1>
        <div className={css.resumeSectionContent} dangerouslySetInnerHTML={{__html: node.html}} />
      </div>
    );
  });

  return (
    <div className='page'>
      <Header active='Résumé' />
      <div className='content'>
        {sections}
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: fileAbsolutePath
      },
      filter: {
        frontmatter: {
          type: {
            in: ["resume"]
          }
        }
      }
    ) {
      nodes {
        id
        html
        frontmatter {
          title
        }
      }
    }
  }
`