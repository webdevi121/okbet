import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid"

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
              count
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
            className="fixed top-0 left-0 top-[55px] z-20 h-full w-full bg-black opacity-40 lg:hidden"
            onClick={toggleNavigationHandler}
            aria-hidden="true"
          ></div>
        ) : null}

        <div className="theme-container ">
          <div
            className={`fixed top-[55px] left-0 z-20 h-[calc(100vh-55px)] w-[70%] max-w-[300px] overflow-auto bg-[#f9f9f9] pb-5 shadow transition lg:relative lg:top-0 lg:flex lg:h-full lg:w-full lg:max-w-[100%] lg:translate-x-0 lg:items-center lg:overflow-visible lg:bg-transparent lg:pb-0 lg:shadow-none lg:transition-none ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="border-b text-left lg:flex lg:border-0">
              <li className="border-b border-theme-borderColor font-normal lg:border-none lg:py-3">
                <a
                  className="flex items-center rounded-lg py-3 px-5 font-semibold lg:py-2 lg:font-normal"
                  href="/"
                >
                  Home
                </a>
              </li>
              {data.allWpCategory.nodes.map((item, index) => (
                <li
                  key={index}
                  className="group relative border-b border-theme-borderColor font-normal lg:border-none lg:py-3"
                >
                  <Link
                    to={item.uri}
                    activeClassName="bg-theme-primary-light200 text-white active-menu"
                    className="flex items-center space-x-2 py-3 px-5 lg:rounded-lg lg:py-2"
                  >
                    <div className="w-full font-semibold lg:w-auto lg:font-normal">
                      {item.name}
                    </div>
                    {item.wpChildren.nodes.length ? (
                      <ChevronDownIcon className="h-4 w-4 stroke-2 opacity-70" />
                    ) : null}
                  </Link>
                  {item.wpChildren.nodes.length ? (
                    <ul className="top-13 left-0 z-10 hidden w-full px-5 drop-shadow-sm group-hover:block lg:absolute lg:w-[200px] lg:w-auto lg:rounded-xl lg:bg-white lg:px-0 lg:py-3">
                      {item.wpChildren.nodes.map((subItem, index) =>
                        subItem.count !== null ? (
                          <li key={index}>
                            <Link
                              to={subItem.link}
                              className="block w-full py-3 px-5"
                              activeClassName="bg-theme-primary-light200 text-white"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ) : null
                      )}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="mx-5 mt-5 grid h-10 grid-flow-col items-center rounded-lg bg-theme-primary-light text-center text-white lg:hidden">
              <a
                href="https://okebet.com.au/"
                target="_blank"
                className="font-semibold"
                rel="noreferrer"
              >
                Login
              </a>
              <a
                href="https://okebet.com.au/registration/step-1"
                target="_blank"
                className="border-l border-white/20 font-semibold"
                rel="noreferrer"
              >
                Join
              </a>
            </div>
          </div>
        </div>
        <button
          className="absolute top-0 left-0 ml-auto flex h-[55px] items-center justify-center bg-theme-primary px-2 lg:hidden"
          onClick={toggleNavigationHandler}
        >
          {isOpen ? (
            <XMarkIcon className="stroke-3 h-8 w-8 text-white" />
          ) : (
            <Bars3Icon className="stroke-3 h-8 w-8 text-white" />
          )}
        </button>
      </nav>
    </>
  )
}

export default NavigationMenu
