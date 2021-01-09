import React from "react";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby";

import Header from '../components/Header';
import Footer from '../components/Footer';

import css from './lists.module.css'

export default function Lists({ data }) {
  data.allListsJson.nodes.sort((a, b) => b.items.length - a.items.length);
  const lists = data.allListsJson.nodes.map((node) => {
    const listName = node.name;
    const listDescription = node.description;
    const listLength = node.items.length;
    return (
      <Link to={node.slug} className={css.listTile} key={node.id}>
        <div className={css.listTileContent}>
          <h1>{listName}</h1>
          <h2>{listLength} Items</h2>
          <p>{listDescription}</p>
        </div>
        <Img fluid={node.background.childImageSharp.fluid} alt={listName}></Img>
        <div className={css.listTileImageOverlay} />
      </Link>

    );
  });

  return (
    <div className='page'>
      <Header active='Lists' />
      <div className='content'>
        <div className={css.listTiles}>
          {lists}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query {
    allListsJson {
      nodes {
        id
        name
        description
        slug
        background {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 300, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        items {
          name
        }
      }
    }
  }
`
