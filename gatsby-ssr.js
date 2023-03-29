import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/HeeboLight.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="HeeboLight"
    />,
    <link
      rel="preload"
      href="/fonts/HeeboMedium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="HeeboMedium"
    />,
    <link
      rel="preload"
      href="/fonts/HeeboRegular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="HeeboRegular"
    />,
  ])
}
