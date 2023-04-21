import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/poppins-regular-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="poppinsRegular"
    />,
    <link
      rel="preload"
      href="/fonts/poppins-semibold-webfont.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="poppinsSemiBold"
    />,
  ])
}
