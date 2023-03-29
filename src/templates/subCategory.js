import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"

const CategoryPage = ({ data }) => {
  const category = data.wpCategory
  const categoryParent = data.wpCategory.wpParent.node.wpChildren.nodes
  const postItem = data.allWpPost.edges
  return (
    <React.Fragment>
      <Layout>
        <Seo title="title" description="description" />
        <div className="sir-container">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">Sub Category {category.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: category.description }} />
          </div>
          <div className="flex space-x-10">
            <div className="flex-none space-y-3">
              <h2 className="text-xl font-bold">Sub Categories</h2>

              {categoryParent.map(item => (
                <div className="rounded-lg border border-solid" key={item.id}>
                  <div className="space-y-3">
                    <Link
                      to={`${item.link}`}
                      className="text-sir-secondary block p-3"
                      alt={item.name}
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
