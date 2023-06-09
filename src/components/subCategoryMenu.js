import React from "react"
import { Link } from "gatsby"

const SubCategoryMenu = props => {
  const data = props.data
  return (
    <>
      {data.wpChildren.nodes.length === 0 ? (
        //   display child category
        data.wpParent?.node.wpChildren ? (
          <div className="hidden w-[250px] flex-none space-y-3 lg:block">
            {data.wpParent?.node.wpChildren.nodes.map((item, index) =>
              item.count !== null ? (
                <div key={index}>
                  <div className="space-y-3">
                    <Link
                      to={`${item.link}`}
                      className="block whitespace-pre rounded-lg border border-solid p-3"
                      alt={item.name}
                      activeClassName="bg-theme-primary text-white"
                    >
                      <div className="font-bold">{item.name}</div>
                    </Link>
                  </div>
                </div>
              ) : null
            )}
          </div>
        ) : null
      ) : (
        //   display main category
        <div className="hidden w-[250px] flex-none space-y-3 lg:block">
          {data.wpChildren.nodes.map(item =>
            item.count !== null ? (
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
            ) : null
          )}
        </div>
      )}
    </>
  )
}

export default SubCategoryMenu
