import React, { useState, useEffect } from "react"
import Layout from "components/layout"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedPost from "../components/featuredPost"

const SearchResult = ({ location }) => {
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
          categories {
            nodes {
              parentDatabaseId
              name
              uri
              acfCategory {
                categoryColor
              }
            }
          }
          acfPosts {
            videoTick
            postThumbnail {
              gatsbyImage(
                quality: 100
                width: 172
                height: 138
                placeholder: BLURRED
              )
            }
          }
          acfSeoData {
            seoDescription
          }
        }
      }
    }
  `)

  useEffect(() => {
    let matches = []
    if (searchParams && searchParams !== "") {
      matches = nodes.filter(edge => {
        const regex = new RegExp(`${searchParams}`, "gi")
        return edge.title.match(regex)
      })
    }
    setSearchResult(matches)
  }, [searchParams.length])

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
