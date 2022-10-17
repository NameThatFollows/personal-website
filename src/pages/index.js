import React from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home({ data }) {
  return (
    <div className="page">
      <Header active="Home" />
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.nodes[0].html,
        }}
      />
      <Footer />
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: fileAbsolutePath }
      filter: { frontmatter: { type: { in: ["home"] } } }
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
`;
