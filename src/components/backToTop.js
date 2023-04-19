import React, { useState } from "react"

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <button
      className={`back-to-top m-auto space-y-1 ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <div className="m-auto flex h-6 w-6 items-center justify-center rounded-full border border-white">
        <svg viewBox="0 0 30.21 14.49" width="13" height="13" fill="#fff">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <polygon points="1.34 14.49 0 13 14.43 0 15.77 0 30.21 13 28.87 14.49 15.1 2.09 1.34 14.49" />
            </g>
          </g>
        </svg>
      </div>
      <div className="text-[.70rem] text-white">Back To Top</div>
    </button>
  )
}

export default BackToTopButton
