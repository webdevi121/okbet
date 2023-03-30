import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "components/layout"

const Page = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPost {
        edges {
          node {
            id
            title
            uri
          }
        }
      }
    }
  `)

  // Array of all news articles
  const allNews = data.allWpPost.edges

  // State for the list
  const [list, setList] = useState([...allNews.slice(0, 3)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allNews.length > 3)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allNews.length
      const nextResults = isMore
        ? allNews.slice(currentLength, currentLength + 3)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allNews.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return (
    <Layout>
      <div>
        <h1 className="text-xl font-bold">All Post</h1>
        <div>
          {list?.map(article => (
            <Link to={`${article.node.uri}`}>
              <div key={article.node.id}>{article.node.title}</div>
            </Link>
          ))}
        </div>
        {hasMore ? (
          <button
            className="bg-theme-secondary text-white"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        ) : (
          <p>No more results</p>
        )}
      </div>
    </Layout>
  )
}

export default Page
