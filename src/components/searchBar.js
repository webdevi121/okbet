import React, { useState } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import FeaturedPostSidebar from "./featuredPostSidebar"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])

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

  const onChangeHandler = queryText => {
    let matches = []
    if (queryText.length > 2) {
      matches = nodes.filter(edge => {
        const regex = new RegExp(`${queryText}`, "gi")
        return edge.title.match(regex)
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
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center space-x-2">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-5 w-5 opacity-60"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          className="h-full py-3 outline-none"
          onChange={e => onChangeHandler(e.target.value)}
          value={searchQuery}
          placeholder="Search Here"
          onBlur={() => {
            setTimeout(() => {
              setSearchResult([])
            }, 200)
          }}
        />
      </div>

      {searchResult.length > 0 && (
        <>
          <div className="absolute top-10 right-0 z-10 max-h-[500px] w-full w-[390px] overflow-y-auto rounded-xl bg-white p-7">
            <FeaturedPostSidebar data={searchResult} />
            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-theme-primary-light200 p-3 text-center text-white"
            >
              View All Results
            </button>
          </div>
        </>
      )}
      {searchResult.length === 0 && searchQuery.length > 2 && (
        <div className="absolute top-10 right-0 z-10 w-full w-[390px] rounded-xl bg-white p-7">
          <p>No results found</p>
        </div>
      )}
    </form>
  )
}

export default SearchBar
