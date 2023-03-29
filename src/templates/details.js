import React from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"

const DetailPage = ({ data }) => {
  const item = data.wpPost

  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={item.acfSeoData.seoTitle}
          description={item.acfSeoData.seoDescription}
        />
        <div className="sir-container">
          <div className="flex space-x-3">
            <div className="space-y-5 text-left">
              <h1 className="text-primary text-3xl font-bold">{item.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default DetailPage

export const query = graphql`
  query ($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      slug
      id
      link
      content
      acfSeoData {
        seoDescription
        seoTitle
      }
    }
    allWpCategory(filter: { count: { gt: 0 } }) {
      edges {
        node {
          uri
          name
          slug
          id
        }
      }
    }
  }
`
