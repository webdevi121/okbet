import React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"

const Pages = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <Seo
          title={data.wpPage.acfSeoData?.seoTitle}
          description={data.wpPage.acfSeoData?.seoDescription}
          image={data.wpPage.acfSeoData.socialThumbnail?.sourceUrl}
          uri={data.wpPage.uri}
        />
      </Layout>
    </React.Fragment>
  )
}

export default Pages

// export const query = graphql`
//   query ($slug: String!) {
//     wpPage(slug: { eq: $slug }) {
//       uri
//       acfSeoData {
//         seoTitle
//         seoDescription
//         socialThumbnail {
//           sourceUrl
//         }
//       }
//     }
//   }
// `
