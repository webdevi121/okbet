import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { PlayCircleIcon } from "@heroicons/react/24/outline"
import CategoryBadges from "../components/categoryBadges"

const FeaturedPostSidebar = props => {
  return (
    <>
      <div className="space-y-5">
        {props.data.map((item, index) => (
          <div key={index} className="flex space-x-5 bg-white">
            <div className="img-placeholder relative h-[90px] items-center justify-center rounded-xl bg-theme-primary-light200">
              {item.acfPosts.videoTick ? (
                <PlayCircleIcon className="pointer-events-none absolute top-2 right-2 h-4 w-4 text-white" />
              ) : null}
              <Link
                to={item.uri}
                className="flex h-full w-[120px] items-center justify-center px-5"
              >
                <div className="flex h-full items-center justify-center">
                  {item.acfSeoData.socialThumbnail ? (
                    <GatsbyImage
                      image={item.acfSeoData.socialThumbnail.gatsbyImage}
                      alt="Illustration"
                    />
                  ) : null}
                </div>
              </Link>
            </div>
            <div className="space-y-1">
              <Link to={item.uri}>
                <h3 className="text-lg font-semibold leading-6 text-theme-primary line-clamp-2">
                  {item.title}
                </h3>
              </Link>
              <div className="text-sm opacity-50">{item.date}</div>
              <CategoryBadges data={item.categories?.nodes} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedPostSidebar
