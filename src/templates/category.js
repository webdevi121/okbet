import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import SubCategoryMenu from "../components/subCategoryMenu"
import FeaturedPost from "../components/featuredPost"

const CategoryPage = ({ data }) => {
  const category = data.wpCategory

  // Array of all post articles
  const list = data.allWpPost.nodes

  return (
    <React.Fragment>
      <Layout>
        <Seo title="title" description="description" />
        <div className="sir-container">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">Latest: {category.name}</h1>
          </div>
          <div className="flex space-x-10">
            <SubCategoryMenu data={category} />
            <div className="w-full space-y-3">
              <div className="category-layout grid grid-cols-3 gap-5">
                <FeaturedPost data={list} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default CategoryPage

export const query = graphql`
  query ($link: String!) {
    wpCategory(link: { eq: $link }) {
      name
      description
      wpChildren {
        nodes {
          id
          name
          link
        }
      }
      wpParent {
        node {
          wpChildren {
            nodes {
              name
              link
            }
          }
        }
      }
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { link: { eq: $link } } } } }
    ) {
      nodes {
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
`
