import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import FeaturedPost from "../components/featuredPost"
import Banner from "../components/banner"
import HomepageSections from "../components/homepageSections"
import FeaturedArticle from "../components/featuredArticle"

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
        <div className="grid gap-10">
          <Banner data={data.wpPage.acfHomepage.topBanner} />
          <FeaturedPost
            data={data.wpPage.acfHomepage.homepageFeaturedArticles}
          />
          <div className="grid grid-cols-3 gap-5">
            <a href="/category/racing">
              <img
                src="https://admin.okbet.infusion121.com/wp-content/uploads/2023/04/racing.png"
                alt="illustration"
              />
            </a>
            <a href="/category/sports">
              <img
                src="https://admin.okbet.infusion121.com/wp-content/uploads/2023/04/sports.png"
                alt="illustration"
              />
            </a>
            <a href="/category/novelty">
              <img
                src="https://admin.okbet.infusion121.com/wp-content/uploads/2023/04/novelty.png"
                alt="illustration"
              />
            </a>
          </div>
          {data.wpPage.acfHomepage.homepageCategorySections
            ? data.wpPage.acfHomepage.homepageCategorySections.map(
                (node, index) => (
                  <div key={index} className="bg-white p-5">
                    <FeaturedArticle
                      data={node.categoryFeaturedArticles}
                      sectionTitle={node.sectionCategoryName}
                      icon={node.categoryIcon.gatsbyImage}
                      subcategories={node.taxCategory.wpChildren.nodes}
                    />
                  </div>
                )
              )
            : null}
        </div>
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
        topBanner {
          link: bannerLink
          image: bannerImage {
            gatsbyImage(
              quality: 100
              width: 1280
              height: 164
              placeholder: BLURRED
            )
          }
        }
        homepageFeaturedArticles {
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
          }
        }
        homepageCategorySections {
          ... on WpPage_Acfhomepage_HomepageCategorySections_CategorySection {
            sectionCategoryName
            categoryIcon {
              gatsbyImage(
                quality: 10
                width: 60
                height: 45
                placeholder: BLURRED
              )
            }
            categoryFeaturedArticles {
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
              }
            }
            taxCategory {
              wpChildren {
                nodes {
                  name
                  uri
                  acfCategory {
                    categoryIcon {
                      gatsbyImage(
                        placeholder: BLURRED
                        height: 25
                        layout: FIXED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
