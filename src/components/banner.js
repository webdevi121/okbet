import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import "swiper/css"
import "swiper/css/pagination"

SwiperCore.use([Navigation, Autoplay])

const Banner = props => {
  return (
    <React.Fragment>
      <div className="relative overflow-hidden rounded-2xl">
        <Swiper
          loop={true}
          modules={[Navigation]}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: `.swiper-button-next-${props.id}`,
            prevEl: `.swiper-button-prev-${props.id}`,
          }}
        >
          {props.data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.link}>
                <div className="hidden sm:block">
                  <GatsbyImage
                    image={item.image.gatsbyImage}
                    alt="Illustration"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl sm:hidden">
                  <GatsbyImage
                    image={item.imageMobile.gatsbyImage}
                    alt="Illustration"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div>
          <button
            className={`swiper-button-prev-${props.id} absolute top-0 bottom-0 left-0 z-10 m-auto h-[60px] rounded-r-lg bg-white/60 px-1`}
          >
            <ChevronLeftIcon className="inline-block h-6 w-6 rounded-md stroke-1" />
          </button>
          <button
            className={`swiper-button-next-${props.id} absolute top-0 bottom-0 right-0 z-10 m-auto h-[60px] rounded-l-lg bg-white/60 px-1`}
          >
            <ChevronRightIcon className="inline-block h-6 w-6 rounded-md stroke-1" />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
