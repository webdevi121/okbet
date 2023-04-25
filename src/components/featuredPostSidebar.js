import React from "react"
import { Link } from "gatsby"

const FeaturedPostSidebar = props => {
  return (
    <>
      <div className="space-y-5">
        {props.data.map((item, index) => (
          <div key={index} className="flex space-x-5 bg-white">
            <div className="img-placeholder items-center justify-center rounded-xl bg-theme-primary-light200">
              <Link
                to={item.uri}
                className="flex h-full w-[120px] items-center justify-center px-5"
              >
                <div className="flex h-full items-center justify-center">
                  {item.featuredImage ? (
                    <img
                      src={item.featuredImage.node.publicUrl}
                      alt="Illustration"
                      width="200"
                      height="200"
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
              <ul className="flex flex-wrap">
                {item.categories.nodes
                  .slice(0)
                  .reverse()
                  .map((catItem, index) => (
                    <li key={index} className="mr-1 mb-1">
                      <Link
                        to={catItem.uri}
                        className={`rounded-full px-4 py-1 text-xs text-white hover:text-white theme-${catItem.acfCategory.categoryColor}`}
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
    </>
  )
}

export default FeaturedPostSidebar