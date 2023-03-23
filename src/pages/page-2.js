import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
      voluptas? Mollitia deserunt ipsam eaque assumenda nostrum doloremque
      distinctio hic culpa rem vero doloribus minus excepturi, blanditiis
      impedit nobis provident fugiat?
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
