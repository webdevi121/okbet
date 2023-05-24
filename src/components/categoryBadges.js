import React from "react"
import { Link } from "gatsby"

const CategoryBadges = props => {
  const arr = props.data.sort((a, b) => {
    return a.parentDatabaseId - b.parentDatabaseId
  })
  return (
    <React.Fragment>
      {arr ? (
        <div>
          <ul className="-mt-2 flex flex-wrap">
            {arr.map((catItem, index) => (
              <li key={index} className="mr-2 mt-2 last:mr-0">
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
      ) : null}
    </React.Fragment>
  )
}

export default CategoryBadges
