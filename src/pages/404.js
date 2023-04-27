import React from "react"
import Layout from "components/layout"
import Button from "../components/ui/button"

export default function ContactUs() {
  return (
    <Layout>
      <div className="relative flex h-[calc(100vh-540px)] items-center py-20">
        <div className="theme-container relative text-center">
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
