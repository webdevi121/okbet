import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SubcategoriesSlider from "./subcategoriesSlider"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import FeaturedPost from "./featuredPost"

const FeaturedArticle = props => {
  return (
    <>
      {props.type ? (
        <div className="featured-layout grid gap-4 lg:grid-flow-col lg:grid-rows-3">
          <FeaturedPost data={props.data} />
        </div>
      ) : (
        <div className="shadow-xs rounded-2xl bg-white p-5">
          <div className="mb-5 flex items-center">
            <div className="flex items-center space-x-2 lg:space-x-3">
              {props.icon ? (
                <GatsbyImage
                  image={props.icon}
                  alt="Illustration"
                  class="w-8 lg:w-10"
                />
              ) : null}
              <h2 className="text-2xl">{props.sectionTitle}</h2>
            </div>
            <Link
              to={props.slug}
              className="ml-auto flex items-center space-x-3 rounded-full bg-theme-light px-3 py-2 text-sm lg:py-3 lg:px-5 lg:text-base"
            >
              <span>View More</span>
              <ArrowRightIcon className="h3 w-3 lg:h-5 lg:w-5" />
            </Link>
          </div>
          <div className="mb-5">
            <SubcategoriesSlider data={props.subcategories} id={props.id} />
          </div>
          <div className="featured-layout grid gap-4 lg:grid-flow-col lg:grid-rows-3">
            <FeaturedPost data={props.data} />
          </div>
        </div>
      )}
    </>
  )
}

export default FeaturedArticle
