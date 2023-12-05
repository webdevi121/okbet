import React from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Layout from "components/layout"
import Banner from "../components/banner"
import FeaturedArticle from "../components/featuredArticle"
import MainCategories from "../components/mainCategory"

const Homepage = ({ data }) => {
  const item = data.wpPage
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
      ...SeoPage
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
                  height: 150
                  width: 386
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
                    gatsbyImage(
                      quality: 100
                      width: 334
                      height: 267
                      placeholder: BLURRED
                    )
                  }
                }
                acfSeoData {
                  seoDescription
                  socialThumbnail {
                    gatsbyImage(
                      quality: 100
                      width: 334
                      height: 267
                      placeholder: BLURRED
                    )
                  }
                }
              }
            }
            taxCategory {
              link
              wpChildren {
                nodes {
                  name
                  uri
                  count
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
