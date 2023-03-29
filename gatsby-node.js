const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //////////////// Pages ////////////////
  const blogPostTemplate = path.resolve(`src/templates/pages.js`)
  const result = await graphql(`
    query {
      allWpPage(filter: { acfPageData: { pageTemplate: { eq: "default" } } }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allWpPage.edges.forEach(edge => {
    createPage({
      path: `${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  ////////////// Category //////////////
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const resultCategory = await graphql(`
    query {
      allWpCategory {
        edges {
          node {
            slug
            uri
          }
        }
      }
    }
  `)
  resultCategory.data.allWpCategory.edges.forEach(edge => {
    createPage({
      path: `${edge.node.uri}`,
      component: categoryTemplate,
      context: {
        uri: edge.node.uri,
      },
    })
  })

  ////////////// Post Detail Page //////////////
  const postTemplate = path.resolve(`src/templates/details.js`)
  const resultPost = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  resultPost.data.allWpPost.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: postTemplate,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
