import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  FacebookMessengerIcon,
  TwitterIcon,
  EmailIcon,
  FacebookMessengerShareButton,
} from "react-share"
import FeaturedPost from "../components/featuredPost"

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
        <div className="theme-container flex space-x-10">
          <div>
            <div className="flex space-x-3">
              <div className="space-y-5 text-left">
                <h1 className="text-primary text-3xl font-bold">
                  {item.title}
                </h1>
                <div>
                  <h2 className="text-3xl font-bold">Share:</h2>
                  <FacebookShareButton url={postUrl}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                  <FacebookMessengerShareButton
                    url={postUrl}
                    appId="274266067164"
                  >
                    <FacebookMessengerIcon size={32} round={true} />
                  </FacebookMessengerShareButton>
                  <TwitterShareButton url={postUrl}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                  <WhatsappShareButton url={postUrl}>
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                  <EmailShareButton url={postUrl} subject={item.title}>
                    <EmailIcon size={32} round={true} />
                  </EmailShareButton>
                </div>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
            {item.acfPosts.postRepeater?.map(node => (
              <div className="mt-5 rounded-2xl bg-white p-7">
                <h2 className="mb-2 text-xl font-semibold">
                  {node.postSectionTitle}
                </h2>
                <div className="layout">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.postSectionDescription,
                    }}
                  />
                </div>
                <div className="mt-5 flex w-full items-center justify-center">
                  <Link
                    to={node.ctaButton.buttonCtaLink}
                    target="_blank"
                    className="m-auto inline-block rounded-xl bg-theme-primary px-5 py-2 text-lg font-semibold text-white"
                  >
                    {node.ctaButton.buttonCtaTitle}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {item.acfPosts.featuredPostsItems ? (
            <div className="w-[390px] flex-none">
              <div className="rounded-2xl bg-white p-7">
                <h2 className="text-xl font-semibold">Featured Post</h2>
                <FeaturedPost data={item.acfPosts.featuredPostsItems} />
              </div>
            </div>
          ) : null}
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
      acfPosts {
        postRepeater {
          postSectionTitle
          postSectionDescription
          ctaButton {
            buttonCtaTitle
            buttonCtaLink
          }
        }
        featuredPostsItems {
          ... on WpPost {
            id
            title
            excerpt
            uri
            date(formatString: "DD  MMMM, YYYY")
            featuredImage {
              node {
                publicUrl
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                uri
                acfCategory {
                  categoryColor
                }
              }
            }
          }
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
