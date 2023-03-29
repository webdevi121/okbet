import React from "react"
import Layout from "components/layout"
import Button from "../components/ui/button"

export default function ContactUs() {
  return (
    <Layout>
      <div className="relative flex h-[calc(100vh-540px)] items-center py-20">
        <div className="absolute top-0 left-0 h-full w-full">
          <img
            src="https://admin.payinn.com.au/wp-content/uploads/2023/03/bg-earth-2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="theme-container relative text-center text-white">
          <div className="m-auto max-w-lg space-y-6 py-32">
            <h1 className="inline-block text-[10rem] font-bold leading-[130px]">
              404
            </h1>
            <div className="text-2xl font-bold">Page Not Found!</div>
            <div>
              Oops! The Page You Are Looking For Does Not Exist. It Might Have
              Been Moved Or Deleted.
            </div>
            <Button name="Navigate Back Home" link="/" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
