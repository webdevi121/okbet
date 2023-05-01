import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FooterLogos = () => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        acfOptionsGlobalOptions {
          acfOptions {
            wageringProvidersLogosRepeater {
              logoImage {
                gatsbyImage(
                  quality: 100
                  placeholder: BLURRED
                  height: 27
                  layout: FIXED
                )
              }
            }
            paymentMethodsRepeater {
              logoPaymentMethods {
                gatsbyImage(
                  quality: 100
                  placeholder: BLURRED
                  height: 27
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-5 lg:gap-16">
        <div>
          <h2 className="mb-3 text-center font-semibold text-white">
            Approved Wagering Providers
          </h2>
          <div className="grid grid-cols-3 items-center justify-center gap-2 lg:grid-cols-6">
            {data.wp.acfOptionsGlobalOptions.acfOptions.wageringProvidersLogosRepeater.map(
              (item, index) => (
                <div key={index} className="rounded-md bg-white p-1">
                  <GatsbyImage
                    image={getImage(item.logoImage.gatsbyImage)}
                    alt="Illustration"
                    className="m-auto"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-center font-semibold text-white">
            Payment Methods
          </h2>
          <div className="grid grid-cols-3 items-center justify-center gap-2 lg:grid-cols-6">
            {data.wp.acfOptionsGlobalOptions.acfOptions.paymentMethodsRepeater.map(
              (item, index) => (
                <div key={index} className="rounded-md bg-white p-1">
                  <GatsbyImage
                    image={getImage(item.logoPaymentMethods.gatsbyImage)}
                    alt="Illustration"
                    className="m-auto"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FooterLogos
