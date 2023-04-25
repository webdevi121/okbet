import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SearchBar from "./searchBar"

const NavigationMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      wpMenu(locations: { eq: PRIMARY }) {
        menuItems {
          nodes {
            label
            uri
            id
          }
        }
      }
    }
  `)

  return (
    <>
      <nav className="bg-white">
        <div className="theme-container">
          <ul className="border-b border-solid border-slate-700 text-left lg:ml-auto lg:flex lg:space-x-3 lg:border-0 ">
            {data.wpMenu.menuItems.nodes.map(item => (
              <li key={item.id} className="py-3 font-normal">
                <Link
                  to={item.uri}
                  activeClassName="bg-white/10"
                  className="rounded-lg py-2 px-5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavigationMenu
