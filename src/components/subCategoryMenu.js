import React from "react"
import { Link } from "gatsby"

const SubCategoryMenu = props => {
  const data = props.data
  return (
    <div>
      <div className="flex-none space-y-3">
        <h2 className="text-xl font-bold">Sub Categories</h2>

        {data.wpChildren.nodes.length === 0
          ? //   display child category
            data.wpParent?.node.wpChildren.nodes.map(item => (
              <div key={item.id}>
                <div className="space-y-3">
                  <Link
                    to={`${item.link}`}
                    className="text-sir-secondary block rounded-lg border border-solid p-3"
                    alt={item.name}
                    activeClassName="bg-theme-secondary text-white"
                  >
                    <h2 className="text-xl font-bold">{item.name}</h2>
                  </Link>
                </div>
              </div>
            ))
          : //   display main category
            data.wpChildren.nodes.map(item => (
              <div key={item.id}>
                <div className="space-y-3">
                  <Link
                    to={`${item.link}`}
                    className="text-sir-secondary block rounded-lg border border-solid p-3"
                    alt={item.name}
                    activeClassName="bg-theme-secondary text-white"
                  >
                    <h2 className="text-xl font-bold">{item.name}</h2>
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default SubCategoryMenu
