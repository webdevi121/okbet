import React from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  FacebookMessengerShareButton,
} from "react-share"

const DetailPage = ({ data }) => {
  const item = data.wpPost
  const postUrl = data.site.siteMetadata.siteUrl + item.link

  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={item.acfSeoData.seoTitle}
          description={item.acfSeoData.seoDescription}
          image={item.acfSeoData.socialThumbnail?.sourceUrl}
          uri={item.link}
        />
        <div className="sir-container">
          <div className="flex space-x-3">
            <div className="space-y-5 text-left">
              <h1 className="text-primary text-3xl font-bold">{item.title}</h1>
              <div>
                <h2 className="text-3xl font-bold">Share:</h2>
                <FacebookShareButton url={postUrl}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <FacebookMessengerShareButton url={postUrl}>
                  <FacebookMessengerIcon size={32} round={true} />
                </FacebookMessengerShareButton>
                <TwitterShareButton url={postUrl}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
              </div>
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
        socialThumbnail {
          sourceUrl
        }
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
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
