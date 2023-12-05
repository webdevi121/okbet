import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import SubCategoryMenu from "../components/subCategoryMenu"
import FeaturedPost from "../components/featuredPost"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const CategoryPage = ({ data }) => {
  const category = data.wpCategory

  // Array of all post articles
  const list = data.allWpPost.nodes
  const item = data.wpCategory

  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={item.seo.title}
          description={
            item.seo.metaDesc
              ? item.seo.metaDesc
              : item.seo.opengraphDescription
          }
          image={item.seo.opengraphImage?.sourceUrl}
          url={item.seo.opengraphUrl}
          publishedTime={item.seo.opengraphPublishedTime}
          publisher={item.seo.opengraphPublisher}
          modifiedTime={item.seo.opengraphModifiedTime}
          type={item.seo.opengraphType}
        />

        <div className="mb-5 w-full">
          <ul className="flex">
            <li className="flex items-center">
              <a href="/" className="p-2">
                Home
              </a>
            </li>
            {category.wpParent ? (
              <li className="flex items-center">
                <ChevronRightIcon className="mx-2 w-5" />
                <Link to={category.wpParent.node.link}>
                  {category.wpParent.node.name}
                </Link>
              </li>
            ) : null}
            <li className="flex items-center last:opacity-50">
              <ChevronRightIcon className="mx-2 w-5" />
              {category.name}
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Latest: {category.name}</h1>
        </div>
        <div className="flex lg:space-x-10">
          <SubCategoryMenu data={category} />
          <div className="w-full space-y-3">
            {list.length ? (
              <div className="category-layout grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                <FeaturedPost data={list} />
              </div>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center opacity-30">
                <div>No posts found in this category</div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default CategoryPage

export const query = graphql`
  query ($id: String!) {
    wpCategory(id: { eq: $id }) {
      name
      description
      link
      ...SeoCategory
      acfSeoData {
        seoDescription
        seoTitle
        socialThumbnail {
          sourceUrl
        }
      }
      wpChildren {
        nodes {
          id
          name
          link
          count
          acfCategory {
            categoryIcon {
              gatsbyImage(placeholder: BLURRED, height: 18, layout: FIXED)
            }
          }
        }
      }
      wpParent {
        node {
          name
          link
          wpChildren {
            nodes {
              name
              link
              count
              acfCategory {
                categoryIcon {
                  gatsbyImage(placeholder: BLURRED, height: 18, layout: FIXED)
                }
              }
            }
          }
        }
      }
    }
    allWpPost(
      sort: { date: DESC }
      filter: { categories: { nodes: { elemMatch: { id: { eq: $id } } } } }
    ) {
      nodes {
        id
        title
        excerpt
        uri
        date(formatString: "DD  MMMM, YYYY")
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
          postThumbnail {
            gatsbyImage(quality: 100, width: 180, placeholder: BLURRED)
          }
        }
        acfSeoData {
          seoDescription
        }
      }
    }
  }
`
