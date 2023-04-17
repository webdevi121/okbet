import React from "react"

const HomepageSections = props => {
  const data = props.data
  return (
    <React.Fragment>
      {data
        ? data.map((node, index) => (
            <div key={index} className="bg-white p-10">
              <div>
                <ul className="flex space-x-3">
                  {node.taxCategory.wpChildren.nodes.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
                <ul>
                  {node.categoryFeaturedArticles.map((item, index) => (
                    <li key={index}>- {item.title}</li>
                  ))}
                  <div></div>
                </ul>
              </div>
            </div>
          ))
        : null}
    </React.Fragment>
  )
}

export default HomepageSections
