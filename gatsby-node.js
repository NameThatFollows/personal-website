const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allListsJson {
        nodes {
          slug
          type
        }
      }
    }
  `);
  result.data.allListsJson.nodes.forEach((node) => {
    createPage({
      path: `${node.slug}`,
      component: path.resolve(`./src/components/List.js`),
      context: {
        type: node.type,
        slug: node.slug,
      },
    });
  });
};
