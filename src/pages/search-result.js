import React, { useState, useEffect } from "react"
import Layout from "components/layout"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedPost from "../components/featuredPost"

const SearchResult = ({ location }) => {
  const [posts, setPosts] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const searchParams = location.search ? location.search.split("=")[1] : ""

  const {
    allWpPost: { nodes },
  } = useStaticQuery(graphql`
    query {
      allWpPost {
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
              gatsbyImage(
                quality: 100
                width: 200
                height: 116
                placeholder: BLURRED
              )
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
          acfPosts {
            videoTick
          }
        }
      }
    }
  `)

  useEffect(() => {
    setPosts(nodes)
    let matches = []
    if (searchParams && searchParams !== "") {
      matches = nodes.filter(edge => {
        const regex = new RegExp(`${searchParams}`, "gi")
        return edge.title.match(regex)
      })
    }
    setSearchResult(matches)
  }, [searchParams])

  return (
    <Layout>
      <div className="">
        <div className="mb-5 text-3xl font-semibold">
          Search results for : {searchParams}
        </div>
        <div className="category-layout grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {searchResult.length > 0 && <FeaturedPost data={searchResult} />}
        </div>
      </div>
    </Layout>
  )
}

export default SearchResult
