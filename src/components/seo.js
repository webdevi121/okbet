/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  description,
  lang,
  meta,
  title,
  image,
  url,
  publishedTime,
  publisher,
  modifiedTime,
  type,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const pageUrl = site.siteMetadata.siteUrl + `${url}`
  const ogTitle = `${title}`
  const canonicalUrl = site.siteMetadata.siteUrl + `${url}`
  const socialImg = image ? image : "/images/default.png"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title ? title : null}
      titleTemplate={defaultTitle ? `%s` : defaultTitle}
      link={[
        {
          rel: "canonical",
          href: canonicalUrl,
        },
      ]}
      meta={[
        {
          name: `robots`,
          content: "INDEX, FOLLOW",
        },
        {
          name: `author`,
          content: defaultTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `article:publisher`,
          content: publisher,
        },
        {
          property: `article:published_time`,
          content: publishedTime,
        },
        {
          property: `article:modified_time`,
          content: modifiedTime,
        },
        {
          property: `og:title`,
          content: ogTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:LOCALE`,
          content: "en_US",
        },
        {
          name: `og:url`,
          content: pageUrl,
        },
        {
          name: `og:site_name`,
          content: defaultTitle,
        },
        {
          name: `og:image`,
          content: socialImg,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: ogTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
