import React from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import PageSection from "../components/pageSection"
import FeaturedPost from "../components/featuredPost"

const Homepage = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={data.wpPage.acfSeoData?.seoTitle}
          description={data.wpPage.acfSeoData?.seoDescription}
          image={data.wpPage.acfSeoData.socialThumbnail?.sourceUrl}
          uri={data.wpPage.uri}
        />
        <PageSection data={data} />
        <FeaturedPost data={data.wpPage.acfHomepage.homepageFeaturedArticles} />
      </Layout>
    </React.Fragment>
  )
}

export default Homepage

export const query = graphql`
  {
    wpPage(slug: { eq: "homepage" }) {
      uri
      acfSeoData {
        seoTitle
        seoDescription
        socialThumbnail {
          sourceUrl
        }
      }
      acfHomepage {
        homepageFeaturedArticles {
          ... on WpPost {
            id
            title
            excerpt
            date(formatString: "DD  MMMM, YYYY")
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`
