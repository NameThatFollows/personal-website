import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

import * as css from "./lists.module.css";

export default function Lists({ data }) {
  const listCounts = data.allMongodbListdataPlaces.group.reduce(
    (dict, value) => {
      dict[value.distinct[0]] = value.totalCount;
      return dict;
    },
    {}
  );
  data.allListsJson.nodes.sort(
    (a, b) => listCounts[b.type] - listCounts[a.type]
  );
  const lists = data.allListsJson.nodes.map((node) => {
    const listName = node.name;
    const listDescription = node.description;
    return (
      <Link to={node.slug} className={css.listTile} key={node.id}>
        <div className={css.listTileContent}>
          <h1>{listName}</h1>
          <h2>{listCounts[node.type]} Items</h2>
          <p>{listDescription}</p>
        </div>
        <GatsbyImage
          image={node.background.childImageSharp.gatsbyImageData}
          alt={listName}
        />
        <div className={css.listTileImageOverlay} />
      </Link>
    );
  });

  return (
    <div className="page">
      <Header active="Lists" />
      <div className="content">
        <div className={css.listTiles}>{lists}</div>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  {
    allListsJson {
      nodes {
        id
        name
        description
        slug
        type
        background {
          childImageSharp {
            gatsbyImageData(
              width: 500
              height: 300
              transformOptions: { cropFocus: CENTER }
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    allMongodbListdataPlaces {
      group(field: type) {
        totalCount
        distinct(field: type)
      }
    }
  }
`;
