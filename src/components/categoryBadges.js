import React from "react"
import { Link } from "gatsby"

const CategoryBadges = props => {
  const arr = props.data.sort((a, b) => {
    return a.parentDatabaseId - b.parentDatabaseId
  })
  return (
    <React.Fragment>
      <ul className="flex space-x-3">
        {arr.map((catItem, index) => (
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
    </React.Fragment>
  )
}

export default CategoryBadges
