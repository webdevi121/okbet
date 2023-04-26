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
        <div className="category-layout grid grid-cols-3 gap-5">
          {searchResult.length > 0 && <FeaturedPost data={searchResult} />}
        </div>
      </div>
    </Layout>
  )
}

export default SearchResult
