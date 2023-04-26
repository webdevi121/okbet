import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SubcategoriesSlider from "./subcategoriesSlider"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import FeaturedPost from "./featuredPost"

const FeaturedArticle = props => {
  return (
    <>
      <div className="bg-white p-5">
        <div className="mb-5 flex items-center">
          <div className="flex items-center space-x-3">
            <GatsbyImage image={props.icon} alt="Illustration" />
            <h2 className="text-2xl">{props.sectionTitle}</h2>
          </div>
          <Link
            to={props.slug}
            className="ml-auto flex items-center space-x-3 rounded-full bg-theme-light py-3 px-5"
          >
            <span>View More</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
        <div className="mb-5">
          <SubcategoriesSlider data={props.subcategories} id={props.id} />
        </div>
        <div className="featured-layout grid grid-flow-col grid-rows-3 gap-4">
          <FeaturedPost data={props.data} />
        </div>
      </div>
    </>
  )
}

export default FeaturedArticle
