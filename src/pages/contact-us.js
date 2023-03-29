import React from "react"
import { graphql } from "gatsby"
import Seo from "components/seo"
import Iframe from "react-iframe"
import Layout from "components/layout"

export default function ContactUs({ data }) {
  return (
    <Layout>
      <Seo
        title={data.wpPage.acfSeoData?.seoTitle}
        description={data.wpPage.acfSeoData?.seoDescription}
        image={data.wpPage.acfSeoData.socialThumbnail?.sourceUrl}
        uri={data.wpPage.uri}
      />
      <div className="relative py-10 lg:py-20">
        <div className="absolute top-0 left-0 h-full w-full">
          <img
            src="https://admin.payinn.com.au/wp-content/uploads/2023/03/bg-earth-2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="theme-container relative text-white">
          <div className="grid grid-flow-row gap-5 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1">
              <Iframe
                src="https://admin.payinn.com.au/contact-us/"
                width="100%"
                height="800"
                title="contact form"
              />
            </div>
            <div className="layout lg:order-2">
              <h1 className="mb-10 text-4xl font-bold text-theme-primary">
                <span className="after:flex after:w-[40px] after:border-[2px] after:border-b after:border-theme-primary">
                  Get In Touch
                </span>
              </h1>
              <p>
                If you are ready to start saving your business the high cost of
                accepting card payments, contact us and a Payment Processing Fee
                Specialist will contact you within 24 hours to help you start
                saving on Merchant Fees!
              </p>
              <p>
                <a href="mailto:info@payinn.com.au">info@payinn.com.au</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    wpPage(slug: { eq: "contact-us" }) {
      uri
      acfSeoData {
        seoTitle
        seoDescription
        socialThumbnail {
          sourceUrl
        }
      }
    }
  }
`
