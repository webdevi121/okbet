import { graphql } from "gatsby"

export const fragmentSeo = graphql`
  fragment SeoPost on WpPost {
    seo {
      title
      metaDesc
      canonical
      opengraphDescription
      opengraphUrl
      opengraphPublisher
      opengraphPublishedTime
      opengraphModifiedTime
      opengraphType
      opengraphImage {
        sourceUrl
      }
    }
  }
  fragment SeoCategory on WpCategory {
    seo {
      title
      metaDesc
      canonical
      opengraphDescription
      opengraphUrl
      opengraphPublisher
      opengraphPublishedTime
      opengraphModifiedTime
      opengraphType
      opengraphImage {
        sourceUrl
      }
    }
  }
  fragment SeoPage on WpPage {
    seo {
      title
      metaDesc
      canonical
      opengraphDescription
      opengraphUrl
      opengraphPublisher
      opengraphPublishedTime
      opengraphModifiedTime
      opengraphType
      opengraphImage {
        sourceUrl
      }
    }
  }
`
