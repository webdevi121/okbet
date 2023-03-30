import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"

const CategoryPage = ({ data }) => {
  const category = data.wpCategory

  // Array of all post articles
  const allPost = data.allWpPost.edges

  // State for the list
  const [list, setList] = useState([...allPost.slice(0, 3)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allPost.length > 3)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allPost.length
      const nextResults = isMore
        ? allPost.slice(currentLength, currentLength + 3)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allPost.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

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
            <div className="w-full space-y-3">
              <ul className="space-y-3">
                {list?.map(article => (
                  <div
                    key={article.node.id}
                    className="rounded-lg border border-solid p-3"
                  >
                    <div className="space-y-3">
                      <Link
                        to={`/${article.node.slug}`}
                        className="text-sir-secondary"
                        alt={article.node.title}
                      >
                        <h2 className="text-xl font-bold">
                          {article.node.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                ))}
              </ul>
              {hasMore ? (
                <button
                  className="bg-theme-secondary text-white"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              ) : null}
            </div>
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
          uri
        }
      }
    }
  }
`
