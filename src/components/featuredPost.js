import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const FeaturedPost = props => {
  return (
    <>
      {props.data.map(item => (
        <div
          className="overflow-hidden rounded-2xl border-theme-borderColor bg-white"
          key={item.id}
        >
          <div className="flex h-80 items-center justify-center bg-theme-primary">
            <img
              src="https://admin.okbet.infusion121.com/wp-content/uploads/2023/04/tips-img.png"
              alt=""
              width="260"
            />
          </div>
          <div className="space-y-3 p-5">
            <h2 className="text-xl font-medium text-theme-primary">
              {item.title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: item.excerpt }} />
            <div className="text-sm opacity-80">{item.date}</div>
            <ul className="flex space-x-3">
              {item.categories.nodes.map(catItem => (
                <li>
                  <Link
                    to="/"
                    className="rounded-full bg-theme-primary px-4 py-1 text-sm font-medium text-white"
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
