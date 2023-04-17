import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const FeaturedPost = props => {
  return (
    <>
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        {props.data.map((item, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-2xl border-theme-borderColor bg-white ${
              index > 0 ? "flex-post" : "row-span-3"
            } `}
          >
            <div className="img-placeholder items-center justify-center bg-theme-primary">
              <div className="flex h-full items-center justify-center">
                <img
                  src="https://admin.okbet.infusion121.com/wp-content/uploads/2023/04/tips-img.png"
                  alt=""
                  width="260"
                />
              </div>
            </div>
            <div className="space-y-3 p-5">
              <h2 className="text-xl font-semibold text-theme-primary line-clamp-1">
                {item.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: item.excerpt }}
                className="line-clamp-2"
              />
              <div className="text-sm opacity-80">{item.date}</div>
              <ul className="flex space-x-3">
                {item.categories.nodes.map(catItem => (
                  <li>
                    <Link
                      to="/"
                      className="rounded-full bg-theme-primary px-4 py-1 text-sm text-white"
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

export default FeaturedPost
