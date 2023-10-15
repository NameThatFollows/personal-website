import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

import * as css from "./lists.module.css";
import { s, si } from "../utils/singular";
import { randInt } from "e";

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
  let lists = data.allListsJson.nodes.map((node) => {
    const listName = si ? node.sname : node.name;
    const listDescription = si ? node.sdescription : node.description;
    return (
      <Link to={node.slug} className={css.listTile} key={node.id}>
        <div className={css.listTileContent}>
          <h1>{listName}</h1>
          <h2>{si ? 1 : listCounts[node.type]} Item{s}</h2>
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

  if (si) {
    lists = lists.at(randInt(0, lists.length - 1))
  }

  return (
    <div className="page">
      <Header active="/lists" />
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
        sname
        description
        sdescription
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
