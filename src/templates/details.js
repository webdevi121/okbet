import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import FeaturedPostSidebar from "../components/featuredPostSidebar"
import ShareIcons from "../components/shareIcons"
import { LinkIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import CategoryBadges from "../components/categoryBadges"

const DetailPage = ({ data }) => {
  const item = data.wpPost
  const postUrl = data.site.siteMetadata.siteUrl + item.link

  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={
            item.acfSeoData.seoTitle ? item.acfSeoData.seoTitle : item.title
          }
          description={
            item.acfSeoData.seoDescription
              ? item.acfSeoData.seoDescription
              : item.excerpt
          }
          image={item.acfSeoData.socialThumbnail?.sourceUrl}
          uri={item.link}
        />
        <div className="lg:flex lg:space-x-10">
          <div>
            <div className="flex space-x-3">
              <div className="w-full space-y-5 text-left">
                <div className="mb-5 w-full">
                  <ul className="flex overflow-hidden">
                    <li className="flex items-center">
                      <a href="/" className="p-2">
                        Home
                      </a>
                    </li>
                    {item.terms.nodes
                      .slice(0)
                      .reverse()
                      .map((terms, index) => (
                        <li
                          key={index}
                          className="flex items-center last:opacity-50"
                        >
                          <ChevronRightIcon className="mx-2 w-5 flex-none" />
                          <Link to={terms.uri} className="whitespace-pre">
                            {terms.name}
                          </Link>
                        </li>
                      ))}
                    <li className="flex items-center last:opacity-50">
                      <ChevronRightIcon className="mx-2 w-5 flex-none" />
                      <div className="line-clamp-1">{item.title}</div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-5">
                  <div className="flex w-full items-center rounded-2xl bg-theme-primary-light200 p-4 sm:p-8">
                    <div className="flex h-full items-center justify-center">
                      {item.acfSeoData.socialThumbnail ? (
                        <GatsbyImage
                          image={item.acfSeoData.socialThumbnail.gatsbyImage}
                          alt="Illustration"
                        />
                      ) : null}
                    </div>
                    <div className="ml-auto">
                      <div className="mb-1 text-xs font-bold text-white">
                        Share Tips:
                      </div>
                      <ShareIcons title={item.title} postUrl={postUrl} />
                    </div>
                  </div>
                  <h1 className="text-primary text-4xl font-bold">
                    {item.title}
                  </h1>
                  <CategoryBadges data={item.categories.nodes} />
                  <div className="text-sm opacity-50">{item.date}</div>
                </div>
                <div className="layout">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </div>
            </div>
            {item.acfPosts.postRepeater?.map((node, index) => (
              <div
                key={index}
                className="mb-5 overflow-hidden rounded-2xl bg-white drop-shadow-sm"
              >
                <div className="w-full items-center bg-theme-primary-light200 py-3 px-7 text-xl text-white sm:flex">
                  <h2 className="font-semibold">
                    {node.sectionHeadingGroup.groupSectionTitle}
                  </h2>
                  {node.sectionHeadingGroup.suggestedLink ? (
                    <Link
                      to={node.sectionHeadingGroup.suggestedLink}
                      className="ml-auto mt-2 flex items-center space-x-2 text-base underline sm:mt-0"
                      target="_blank"
                    >
                      <LinkIcon className="h-4 w-4 text-white" />
                      <span>
                        {node.sectionHeadingGroup.groupSectionRightText}
                      </span>
                    </Link>
                  ) : (
                    <div className="ml-auto mt-2 sm:mt-0">
                      {node.sectionHeadingGroup.groupSectionRightText}
                    </div>
                  )}
                </div>
                <div className="layout p-7">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.postSectionDescription,
                    }}
                  />
                  {node.ctaButton.buttonCtaLink ? (
                    <div className="mt-5 flex w-full items-center justify-center">
                      <a
                        href={node.ctaButton.buttonCtaLink}
                        target="_blank"
                        className="m-auto inline-block rounded-lg bg-theme-primary-light200 px-5 py-2 text-lg font-semibold text-white"
                      >
                        {node.ctaButton.buttonCtaTitle}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="flex-none space-y-5 lg:w-[390px]">
            {item.acfPosts.featuredPostsItems ? (
              <div className="rounded-2xl bg-white p-7 drop-shadow-sm">
                <h2 className="mb-5 text-2xl font-semibold">Featured Post</h2>
                <FeaturedPostSidebar data={item.acfPosts.featuredPostsItems} />
              </div>
            ) : null}

            <div className="rounded-2xl bg-white p-7 drop-shadow-sm">
              <h2 className="mb-5 text-2xl font-semibold">Categories</h2>
              <div className="flex flex-col space-y-2">
                {data.allWpCategory.edges.map((cat, index) => (
                  <Link
                    key={index}
                    to={cat.node.uri}
                    className="rounded-xl border border-theme-borderColor p-2 px-3 font-semibold"
                  >
                    {cat.node.name}
                  </Link>
                ))}
              </div>
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
      excerpt
      date(formatString: "DD  MMMM, YYYY")
      terms {
        nodes {
          name
          uri
        }
      }
      acfSeoData {
        seoDescription
        seoTitle
        socialThumbnail {
          sourceUrl
          gatsbyImage(
            quality: 100
            width: 100
            height: 58
            placeholder: BLURRED
          )
        }
      }
      categories {
        nodes {
          name
          uri
          parentDatabaseId
          acfCategory {
            categoryColor
          }
        }
      }
      acfPosts {
        videoTick
        postRepeater {
          postSectionDescription
          sectionHeadingGroup {
            groupSectionTitle
            groupSectionRightText
            suggestedLink
          }
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
            categories {
              nodes {
                name
                uri
                acfCategory {
                  categoryColor
                }
              }
            }
            acfPosts {
              videoTick
            }
            acfSeoData {
              seoDescription
              socialThumbnail {
                gatsbyImage(
                  quality: 100
                  width: 200
                  height: 116
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
    allWpCategory(
      filter: { slug: { ne: "uncategorized" } }
      sort: { databaseId: ASC }
    ) {
      edges {
        node {
          uri
          name
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
