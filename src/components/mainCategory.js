import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const MainCategories = props => {
  return (
    <React.Fragment>
      <div className="grid gap-5 sm:grid-cols-3">
        {props.data.map((item, index) => (
          <a key={index} href={item.mainCategoryLink}>
            <GatsbyImage
              image={item.mainCategoryImage.gatsbyImage}
              alt="Illustration"
            />
          </a>
        ))}
      </div>
    </React.Fragment>
  )
}

export default MainCategories
