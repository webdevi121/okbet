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

  ////////////// Sub Category //////////////
  // const subCategoryTemplate = path.resolve(`src/templates/subCategory.js`)
  // const resultSubCategory = await graphql(`
  //   query {
  //     allWpCategory {
  //       edges {
  //         node {
  //           link
  //         }
  //       }
  //     }
  //   }
  // `)
  // resultSubCategory.data.allWpCategory.edges.forEach(edge => {
  //   createPage({
  //     path: `${edge.node.link}`,
  //     component: subCategoryTemplate,
  //     context: {
  //       link: edge.node.link,
  //     },
  //   })
  // })

  ////////////// Category //////////////
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const resultCategory = await graphql(`
    query {
      allWpCategory {
        edges {
          node {
            link
          }
        }
      }
    }
  `)
  resultCategory.data.allWpCategory.edges.forEach(edge => {
    createPage({
      path: `${edge.node.link}`,
      component: categoryTemplate,
      context: {
        link: edge.node.link,
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
            id
          }
        }
      }
    }
  `)
  resultPost.data.allWpPost.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: postTemplate,
      ownerNodeId: edge.node.id,
      context: {
        slug: edge.node.slug,
        id: edge.node.id,
      },
    })
  })

  ////////////// Search Result Landing Page //////////////
  const searchResultTemplate = path.resolve(`src/pages/search-result.js`)
  createPage({
    path: "/search-result",
    component: searchResultTemplate,
  })
}
