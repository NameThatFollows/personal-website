import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';

export default function Projects({ data }) {
  console.log(data);
  const projects = data.allMarkdownRemark.edges.map(({ node }, index) => {
    return (<div key={node.id}>
      {index === 0 ? <></> : <hr />}
      <Project node={node} />
    </div>);
  });
  return (
    <div className='page'>
      <Header active='Projects' />
      <div className='content'>
        {projects}
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          type: {
            in: ["project"]
          }
        }
      }
      sort: {
        order: DESC,
        fields: [frontmatter___endDate]
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            endDate(formatString: "MMM YYYY")
            startDate(formatString: "MMM YYYY")
            title
            type
            link
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`