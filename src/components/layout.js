import React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="bg-theme-light">
        <div className="theme-container py-10">{children}</div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
