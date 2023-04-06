import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const SearchBar = () => {
  const [posts, setPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [searchResultUrl, setSearchResutlUrl] = useState("")

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
    if (queryText.length > 2) {
      matches = edges.filter(edge => {
        const regex = new RegExp(`${queryText}`, "gi")
        return edge.node.title.match(regex)
      })
    }
    setSearchResult(matches)
    setSearchQuery(queryText)
    setSearchResutlUrl("/search-result?q=" + queryText)
  }

  const onClickHandler = () => {
    window.location.replace(searchResultUrl)
  }

  const onKeyDownHandler = e => {
    if (e.key === "Enter") {
      window.location.replace(searchResultUrl)
    }
  }

  return (
    <div className="container">
      <input
        type="text"
        className="input"
        onChange={e => onChangeHandler(e.target.value)}
        onKeyDown={e => onKeyDownHandler(e)}
        value={searchQuery}
        onBlur={() => {
          setTimeout(() => {
            setSearchResult([])
          }, 200)
        }}
      />
      {searchResult &&
        searchResult.map((result, i) => {
          if (i < 3)
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
              </div>
            )
        })}
      {searchResult.length > 0 && (
        <input
          type="button"
          onClick={onClickHandler}
          value="View all results"
          style={{
            color: "white",
          }}
        />
      )}
    </div>
  )
}

export default SearchBar
