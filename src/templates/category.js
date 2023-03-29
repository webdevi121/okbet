import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"

const CategoryPage = ({ data }) => {
  const category = data.wpCategory
  const postItem = data.allWpPost.edges
  return (
    <React.Fragment>
      <Layout>
        <Seo title="title" description="description" />
        <div className="sir-container">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">Category {category.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: category.description }} />
          </div>
          <div className="flex space-x-10">
            <div className="flex-none space-y-3">
              <h2 className="text-xl font-bold">Sub Categories</h2>

              {category.wpChildren.nodes.length === 0
                ? category.wpParent.node.wpChildren.nodes.map(item => (
                    <div key={item.id}>
                      <div className="space-y-3">
                        <Link
                          to={`${item.link}`}
                          className="text-sir-secondary block rounded-lg border border-solid p-3"
                          alt={item.name}
                          activeClassName="bg-theme-secondary text-white"
                        >
                          <h2 className="text-xl font-bold">{item.name}</h2>
                        </Link>
                      </div>
                    </div>
                  ))
                : category.wpChildren.nodes.map(item => (
                    <div key={item.id}>
                      <div className="space-y-3">
                        <Link
                          to={`${item.link}`}
                          className="text-sir-secondary block rounded-lg border border-solid p-3"
                          alt={item.name}
                          activeClassName="bg-theme-secondary text-white"
                        >
                          <h2 className="text-xl font-bold">{item.name}</h2>
                        </Link>
                      </div>
                    </div>
                  ))}
            </div>
            <ul className="w-full space-y-3">
              {postItem.map(({ node }) => (
                <div
                  key={node.id}
                  className="rounded-lg border border-solid p-3"
                >
                  <div className="space-y-3">
                    <Link
                      to={`/${node.slug}`}
                      className="text-sir-secondary"
                      alt={node.title}
                    >
                      <h2 className="text-xl font-bold">{node.title}</h2>
                    </Link>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default CategoryPage

export const query = graphql`
  query ($link: String!) {
    wpCategory(link: { eq: $link }) {
      name
      description
      wpChildren {
        nodes {
          id
          name
          link
        }
      }
      wpParent {
        node {
          wpChildren {
            nodes {
              name
              link
            }
          }
        }
      }
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { link: { eq: $link } } } } }
    ) {
      edges {
        node {
          title
          id
          slug
        }
      }
    }
  }
`
