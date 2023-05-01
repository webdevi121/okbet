import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SearchBar from "./searchBar"
import { ChevronDownIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid"

const NavigationMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpCategory(
        filter: {
          parentDatabaseId: { eq: null }
          slug: { ne: "uncategorized" }
        }
        sort: { databaseId: ASC }
      ) {
        nodes {
          id
          uri
          name
          wpChildren {
            nodes {
              link
              name
            }
          }
        }
      }
    }
  `)
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavigationHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="lg:bg-white">
        {isOpen ? (
          <div
            className="fixed top-0 left-0 z-20 h-full w-full bg-black opacity-40"
            onClick={toggleNavigationHandler}
            aria-hidden="true"
          ></div>
        ) : null}

        <div className="theme-container ">
          <div
            className={`fixed top-0 left-0 z-20 h-full w-[70%] bg-theme-primary text-white transition lg:relative lg:flex lg:w-full lg:translate-x-0 lg:items-center lg:bg-transparent lg:text-inherit lg:transition-none ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="border-b border-solid border-slate-700 text-left lg:flex lg:border-0 ">
              <li className="py-3 font-normal">
                <a className="flex items-center rounded-lg py-2 px-5" href="/">
                  Home
                </a>
              </li>
              {data.allWpCategory.nodes.map(item => (
                <li key={item.id} className="group relative py-3 font-normal">
                  <Link
                    to={item.uri}
                    activeClassName="bg-theme-primary-light200 text-white"
                    className="flex items-center space-x-2 rounded-lg py-2 px-5"
                  >
                    <div>{item.name}</div>
                    {item.wpChildren.nodes.length ? (
                      <ChevronDownIcon className="h-4 w-4 stroke-2 opacity-70" />
                    ) : null}
                  </Link>
                  {item.wpChildren.nodes.length ? (
                    <ul className="top-13 absolute left-0 z-10 hidden w-[200px] rounded-xl bg-white py-3 drop-shadow-sm group-hover:block">
                      {item.wpChildren.nodes.map(subItem => (
                        <li>
                          <Link
                            to={subItem.link}
                            className="block w-full p-2 px-5"
                            activeClassName="bg-theme-primary-light200 text-white"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="ml-auto hidden h-full w-[300px] lg:block">
              <SearchBar />
            </div>
          </div>
        </div>
        <button
          className="absolute top-0 right-0 ml-auto px-4 py-3 lg:hidden"
          onClick={toggleNavigationHandler}
        >
          <Bars3BottomLeftIcon className="h-8 w-8 text-white" />
        </button>
      </nav>
    </>
  )
}

export default NavigationMenu
