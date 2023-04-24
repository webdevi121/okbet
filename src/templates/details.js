import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import FeaturedPostSidebar from "../components/featuredPostSidebar"
import ShareIcons from "../components/shareIcons"
import { ChevronRightIcon } from "@heroicons/react/solid"
import SubCategoryMenu from "../components/subCategoryMenu"

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
        <div className="flex space-x-10">
          <div>
            <div className="flex space-x-3">
              <div className="space-y-5 text-left">
                <div className="mb-5 w-full">
                  <ul className="flex">
                    <li className="flex items-center">
                      <a href="" className="p-2">
                        Home
                      </a>
                    </li>
                    <li className="flex items-center">
                      <ChevronRightIcon className="mx-2 w-5" />
                      <a href="" className="p-2">
                        Racing
                      </a>
                    </li>
                    <li className="flex items-center last:opacity-50">
                      <ChevronRightIcon className="mx-2 w-5 flex-none" />
                      <div className="line-clamp-1">{item.title}</div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-5">
                  <div className="flex w-full items-center rounded-2xl bg-theme-primary-light200 p-8">
                    <div className="flex h-full items-center justify-center">
                      {item.featuredImage ? (
                        <img
                          src={item.featuredImage.node.publicUrl}
                          alt="Illustration"
                          width="100"
                          height="100"
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
                  <h1 className="text-primary text-3xl font-bold">
                    {item.title}
                  </h1>
                  <ul className="flex space-x-3">
                    {item.categories.nodes.map((catItem, index) => (
                      <li key={index}>
                        <Link
                          to={catItem.uri}
                          className={`rounded-full px-4 py-1 text-sm text-white hover:text-white theme-${catItem.acfCategory.categoryColor}`}
                        >
                          {catItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm opacity-50">{item.date}</div>
                </div>
                <div className="layout">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </div>
            </div>
            {item.acfPosts.postRepeater?.map(node => (
              <div className="mb-5 rounded-2xl bg-white p-7">
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
          <div className="w-[390px] flex-none space-y-5">
            {item.acfPosts.featuredPostsItems ? (
              <div className="rounded-2xl bg-white p-7">
                <h2 className="mb-5 text-2xl font-semibold">Featured Post</h2>
                <FeaturedPostSidebar data={item.acfPosts.featuredPostsItems} />
              </div>
            ) : null}

            <div className="rounded-2xl bg-white p-7">
              <h2 className="mb-5 text-2xl font-semibold">Categories</h2>
              <div className="flex flex-col space-y-2">
                {data.allWpCategory.edges.map(cat => (
                  <Link
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
      date(formatString: "DD  MMMM, YYYY")
      featuredImage {
        node {
          publicUrl
          sourceUrl
        }
      }
      acfSeoData {
        seoDescription
        seoTitle
        socialThumbnail {
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
    allWpCategory {
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
