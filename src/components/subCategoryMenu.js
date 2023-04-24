import React from "react"
import { Link } from "gatsby"

const SubCategoryMenu = props => {
  const data = props.data
  return (
    <>
      {data.wpChildren.nodes.length === 0 ? (
        //   display child category
        data.wpParent?.node.wpChildren ? (
          <div className="w-[250px] flex-none space-y-3">
            {data.wpParent?.node.wpChildren.nodes.map(item => (
              <div key={item.id}>
                <div className="space-y-3">
                  <Link
                    to={`${item.link}`}
                    className="block whitespace-pre rounded-lg border border-solid p-3"
                    alt={item.name}
                    activeClassName="bg-theme-secondary text-white"
                  >
                    <div className="font-bold">{item.name}</div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : null
      ) : (
        //   display main category
        <div className="w-[250px] flex-none space-y-3">
          {data.wpChildren.nodes.map(item => (
            <div key={item.id}>
              <div className="space-y-3">
                <Link
                  to={`${item.link}`}
                  className="block whitespace-pre rounded-lg border border-solid p-3"
                  alt={item.name}
                  activeClassName="bg-theme-secondary text-white"
                >
                  <div className="font-bold">{item.name}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default SubCategoryMenu
