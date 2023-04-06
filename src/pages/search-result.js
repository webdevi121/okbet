import React, { useState, useEffect } from "react"
import Seo from "components/seo"
import Layout from "components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

const SearchResult = () => {
  const [posts, setPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const searchParams = new URLSearchParams(document.location.search)

  const {
    allWpPost: { edges },
  } = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            id
            title
            link
            featuredImage {
              node {
                uri
                title
                publicUrl
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    setPosts(edges)
    let matches = []
    if (searchParams && searchParams.get("q")) {
      matches = edges.filter(edge => {
        const regex = new RegExp(`${searchParams.get("q")}`, "gi")
        return edge.node.title.match(regex)
      })
    }
    setSearchResult(matches)
  }, [posts])

  return (
    <Layout>
      <div className="relative py-10 lg:py-20">
        <div>Search results for : {searchParams.get("q")}</div>
        {searchResult &&
          searchResult.map((result, i) => {
            return (
              <div
                key={i}
                style={{
                  background: "#3253b5",
                  color: "white",
                  cursor: "pointer",
                  borderRight: "1px solid black",
                  borderLeft: "1px solid black",
                  borderBottom: "1px solid black",
                }}
              >
                <Link to={result.node.link}>{result.node.title}</Link>
                <Link to={result.node.link}>
                  <p>READ MORE</p>
                </Link>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export default SearchResult
