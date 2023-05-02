import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { PlayCircleIcon } from "@heroicons/react/24/outline"

const FeaturedPost = props => {
  return (
    <>
      {props.data?.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-theme-borderColor bg-white"
        >
          <div className="img-placeholder relative order-1 items-center justify-center bg-theme-primary-light200 lg:order-2">
            {item.acfPosts.videoTick ? (
              <PlayCircleIcon className="video-icon" />
            ) : null}
            <Link
              to={item.uri}
              className="flex h-full items-center justify-center p-5 px-4 sm:px-7"
            >
              <div className="flex h-full items-center justify-center">
                {item.featuredImage ? (
                  <GatsbyImage
                    image={item.featuredImage.node.gatsbyImage}
                    alt="Illustration"
                  />
                ) : null}
              </div>
            </Link>
          </div>
          <div className="order-2 space-y-2 p-3 pl-0 sm:p-5 lg:order-1 lg:pl-5">
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
              {item.categories?.nodes
                .slice(0)
                .reverse()
                .map((catItem, index) => (
                  <li key={index}>
                    <Link
                      to={catItem.uri}
                      className={`rounded-full px-4 py-1 text-xs text-white hover:text-white sm:text-sm theme-${catItem.acfCategory.categoryColor}`}
                    >
                      {catItem.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default FeaturedPost
