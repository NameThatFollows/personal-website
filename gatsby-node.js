const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allListsJson {
        nodes {
          slug
        }
      }
    }
  `);
  console.log(JSON.stringify(result, null, 4));
  result.data.allListsJson.nodes.forEach((node) => {
    createPage({
      path: `${node.slug}`,
      component: path.resolve(`./src/components/List.js`),
      context: {
        slug: node.slug,
      }
    });
  })
};
