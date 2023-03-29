import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Cta from "./cta"

const RightImageLeftContent = props => {
  return (
    <React.Fragment>
      <div className="min-h-[50vh] overflow-x-clip bg-theme-light py-20">
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-duration="1000"
          className="theme-container relative"
        >
          <div className="absolute -top-20 left-0 h-[45rem] w-[35rem] bg-theme-primary opacity-20 blur-[150px]"></div>
          <div className="relative grid grid-flow-row items-center gap-10 lg:grid-flow-col xl:grid-cols-2">
            <div className="layout order-2 lg:order-1">
              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                <span className="after:flex after:w-[40px] after:border-[2px] after:border-b after:border-theme-primary">
                  {props.title}
                </span>
              </h2>
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
              {props.buttonLabel ? (
                <div className="mt-10">
                  <Cta />
                </div>
              ) : null}
            </div>
            <div className="m-auto w-full max-w-[15rem] flex-none md:max-w-md lg:order-2 xl:flex xl:max-w-full xl:pl-14">
              <GatsbyImage image={props.image} alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RightImageLeftContent
