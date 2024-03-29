import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { PlayCircleIcon } from "@heroicons/react/24/outline"
import CategoryBadges from "../components/categoryBadges"

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
              <PlayCircleIcon className="video-icon z-10" />
            ) : null}
            <Link
              to={item.uri}
              className="flex h-full items-center justify-center p-2"
            >
              <div className="flex h-full items-center justify-center">
                {item.acfPosts.postThumbnail ? (
                  <GatsbyImage
                    image={item.acfPosts.postThumbnail.gatsbyImage}
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
              dangerouslySetInnerHTML={{
                __html: item.seo.opengraphDescription,
              }}
              className="short-desc text-sm line-clamp-2"
            />
            <div className="text-sm opacity-50">{item.date}</div>
            <CategoryBadges data={item.categories?.nodes} />
          </div>
        </div>
      ))}
    </>
  )
}

export default FeaturedPost
