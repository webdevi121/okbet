import React from "react"
import FeaturedArticle from "./featuredArticle"

const HomepageSections = props => {
  const data = props.data
  return (
    <React.Fragment>
      {data
        ? data.map((node, index) => (
            <div key={index} className="bg-white p-10">
              <div>
                <FeaturedArticle data={node.taxCategory.wpChildren.nodes} />
              </div>
            </div>
          ))
        : null}
    </React.Fragment>
  )
}

export default HomepageSections
