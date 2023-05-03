import React from "react"
import { Link } from "gatsby"

const CategoryBadges = props => {
  var arr = [5, 25, null, 1, null, 30]

  arr.sort(function (a, b) {
    return a - b
  })

  console.log(props.data)
  return (
    <React.Fragment>
      <ul className="flex space-x-3">
        {props.data.map((catItem, index) => (
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
