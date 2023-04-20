import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SubcategoriesSlider from "./subcategoriesSlider"
import { ArrowRightIcon } from "@heroicons/react/solid"

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
        <div className="grid grid-flow-col grid-rows-3 gap-4">
          {props.data.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border border-theme-borderColor bg-white ${
                index > 0 ? "flex-post" : "row-span-3"
              } `}
            >
              <div
                className={`img-placeholder items-center justify-center bg-theme-primary-light200 ${
                  index > 0 ? "" : "h-2/4"
                } `}
              >
                <Link
                  to={item.uri}
                  className="flex h-full items-center justify-center p-5 px-7"
                >
                  <div className="flex h-full items-center justify-center">
                    <GatsbyImage
                      image={item.featuredImage?.node.gatsbyImage}
                      alt="Illustration"
                      width={92}
                      height={52}
                    />
                  </div>
                </Link>
              </div>
              <div className="space-y-2 p-5">
                <Link to={item.uri}>
                  <h3 className="text-xl font-semibold text-theme-primary line-clamp-1">
                    {item.title}
                  </h3>
                </Link>
                <div
                  dangerouslySetInnerHTML={{ __html: item.excerpt }}
                  className="text-sm line-clamp-2"
                />
                <div className="text-sm opacity-50">{item.date}</div>
                <ul className="flex space-x-3">
                  {item.categories.nodes.map((catItem, index) => (
                    <li key={index}>
                      <Link
                        to={catItem.uri}
                        className={`rounded-full px-4 py-1 text-sm text-white hover:text-white theme-${catItem.acfCategory.categoryColor}`}
                      >
                        {catItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FeaturedArticle
