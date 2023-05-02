import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const MainCategories = props => {
  return (
    <React.Fragment>
      <div className="grid gap-5 sm:grid-cols-3">
        {props.data.map(item => (
          <Link to={item.mainCategoryLink}>
            {/* <img src={item.mainCategoryImage.sourceUrl} alt="illustration" /> */}
            <GatsbyImage
              image={item.mainCategoryImage.gatsbyImage}
              alt="Illustration"
            />
          </Link>
        ))}
      </div>
    </React.Fragment>
  )
}

export default MainCategories
