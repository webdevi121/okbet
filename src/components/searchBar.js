import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const SearchBar = () => {
  const [posts, setPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])

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
  }, [])

  const onChangeHandler = queryText => {
    let matches = []
    if (queryText.length > 0) {
      matches = edges.filter(edge => {
        const regex = new RegExp(`${queryText}`, "gi")
        return edge.node.title.match(regex)
      })
    }
    setSearchResult(matches)
    setSearchQuery(queryText)
  }

  return (
    <div className="container">
      <input
        type="text"
        className="input"
        onChange={e => onChangeHandler(e.target.value)}
        value={searchQuery}
        onBlur={() => {
          setTimeout(() => {
            setSearchResult([])
          }, 200)
        }}
      />
      {searchResult &&
        searchResult.map((result, i) => (
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
          </div>
        ))}
    </div>
  )
}

export default SearchBar
