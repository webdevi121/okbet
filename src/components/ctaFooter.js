import React from "react"
import Cta from "./cta"

const CtaFooter = props => {
  return (
    <React.Fragment>
      <div className="relative bg-theme-secondary text-white">
        <div className="theme-container relative flex min-h-[446px] items-center">
          <div className="absolute top-0 left-0 h-full w-full">
            <img
              src="https://admin.payinn.com.au/wp-content/uploads/2023/03/currency-icon.png"
              alt=""
              className="block h-full w-full object-contain"
            />
          </div>
          <div className="relative m-auto flex flex-col space-y-6 rounded-2xl bg-white/10 p-10 text-center lg:max-w-[80%] lg:px-32 xl:max-w-[60%]">
            <h2 className="text-2xl font-bold leading-10 text-white md:text-3xl">
              Looking for a payment gateway you'll love? You're in luck.
            </h2>
            <div>
              <Cta />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CtaFooter
