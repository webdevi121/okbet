import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"

const SearchBar = () => {
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
  }

  const handleSubmit = event => {
    event.preventDefault()
    setTimeout(() => {
      setSearchResult([])
    }, 200)
    setSearchQuery("")
    navigate("/search-result?q=" + searchQuery)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
        {searchResult.length == 0 && searchQuery.length > 2 && (
          <p>No results found</p>
        )}
        {searchResult.length > 0 && (
          <div className="form-control">
            <label></label>
            <button type="submit">View All Results</button>
          </div>
        )}{" "}
      </form>
    </div>
  )
}

export default SearchBar
