import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import SubCategoryMenu from "../components/subCategoryMenu"
import FeaturedPost from "../components/featuredPost"

const CategoryPage = ({ data }) => {
  const category = data.wpCategory

  // Array of all post articles
  const allPost = data.allWpPost.nodes

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
            <h1 className="text-3xl font-bold">Latest: {category.name}</h1>
          </div>
          <div className="flex space-x-10">
            <SubCategoryMenu data={category} />
            <div className="w-full space-y-3">
              <div className="category-layout grid grid-cols-3 gap-5">
                <FeaturedPost data={list} />
              </div>
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
      nodes {
        id
        title
        excerpt
        uri
        date(formatString: "DD  MMMM, YYYY")
        featuredImage {
          node {
            publicUrl
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            uri
            acfCategory {
              categoryColor
            }
          }
        }
      }
    }
  }
`
