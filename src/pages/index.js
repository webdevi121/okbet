import React from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import Banner from "../components/banner"
import FeaturedArticle from "../components/featuredArticle"
import MainCategories from "../components/mainCategory"

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
        <div className="flex flex-col space-y-7 lg:space-y-10">
          {data.wpPage.acfHomepage.homepageCategorySections
            ? data.wpPage.acfHomepage.homepageCategorySections.map(
                (node, index) => (
                  <div key={index}>
                    {node.mainCategoryRepeatear ? (
                      <MainCategories data={node.mainCategoryRepeatear} />
                    ) : null}
                    {node.categoryFeaturedArticles ? (
                      <FeaturedArticle
                        id={"id-" + index}
                        slug={node.taxCategory?.link}
                        data={node.categoryFeaturedArticles}
                        sectionTitle={node.sectionCategoryName}
                        icon={node.categoryIcon?.gatsbyImage}
                        subcategories={node.taxCategory?.wpChildren.nodes}
                        type={node.featuredCategoryType}
                      />
                    ) : null}
                    {node.bannerSliderRepeater ? (
                      <Banner
                        id={"banner-" + index}
                        data={node.bannerSliderRepeater}
                      />
                    ) : null}
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
        homepageCategorySections {
          ... on WpPage_Acfhomepage_HomepageCategorySections_MainCategory {
            mainCategoryRepeatear {
              mainCategoryLink
              mainCategoryImage {
                sourceUrl
                gatsbyImage(
                  quality: 100
                  height: 158
                  width: 405
                  placeholder: BLURRED
                )
              }
            }
          }
          ... on WpPage_Acfhomepage_HomepageCategorySections_CategorySection {
            featuredCategoryType
            sectionCategoryName
            fieldGroupName
            categoryIcon {
              gatsbyImage(
                quality: 100
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
                acfPosts {
                  videoTick
                }
              }
            }
            taxCategory {
              link
              wpChildren {
                nodes {
                  name
                  uri
                  acfCategory {
                    categoryIcon {
                      gatsbyImage(
                        placeholder: BLURRED
                        height: 18
                        layout: FIXED
                      )
                    }
                  }
                }
              }
            }
          }
          ... on WpPage_Acfhomepage_HomepageCategorySections_BannerSlider {
            bannerSliderRepeater {
              fieldGroupName
              link: bannerLink01
              image: bannerImage01 {
                sourceUrl
                gatsbyImage(
                  quality: 100
                  width: 1200
                  height: 164
                  placeholder: BLURRED
                )
              }
              imageMobile: mobileImage {
                sourceUrl
                gatsbyImage(
                  quality: 100
                  width: 585
                  height: 220
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`
