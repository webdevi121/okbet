import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Cta from "./cta"

const BannerSection = props => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-[80vh] items-center bg-theme-secondary pb-10 text-white lg:pb-0">
        {props.backgroundImage ? (
          <div className="absolute bottom-0 left-0 w-full opacity-40">
            <GatsbyImage image={props.backgroundImage} alt="Illustration" />
          </div>
        ) : null}
        <div className="theme-container relative">
          <div className="grid items-center gap-10 space-y-7 text-left lg:grid-cols-2">
            <div className="layout order-2 space-y-7 lg:order-1">
              <h2
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration="1000"
                className="mb-3 text-3xl font-bold md:text-5xl xl:text-7xl"
              >
                {props.title}
              </h2>
              <div
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-easing="ease"
                data-sal-duration="1000"
                dangerouslySetInnerHTML={{ __html: props.content }}
              />
              <div
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-easing="ease"
                data-sal-duration="1000"
                className="mt-10"
              >
                <Cta />
              </div>
            </div>
            {props.thumbnail ? (
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration="1000"
                className="m-auto ml-auto max-w-[16rem] overflow-hidden rounded-lg md:max-w-full lg:order-2"
              >
                <GatsbyImage image={props.thumbnail} alt="Illustration" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default BannerSection
