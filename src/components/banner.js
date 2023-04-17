import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import "swiper/css"
import "swiper/css/pagination"
const Banner = props => {
  return (
    <React.Fragment>
      <div className="relative overflow-hidden rounded-2xl">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: "auto",
              navigation: false,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
        >
          {props.data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <Link to={item.link}>
                  <GatsbyImage
                    image={getImage(item.image)}
                    alt="Illustration"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <button className="swiper-button-prev absolute top-0 bottom-0 left-0 z-10 m-auto h-[60px] rounded-r-lg bg-white/60 px-1">
            <ChevronLeftIcon className="inline-block h-6 w-6 rounded-md stroke-1" />
          </button>
          <button className="swiper-button-next absolute top-0 bottom-0 right-0 z-10 m-auto h-[60px] rounded-l-lg bg-white/60 px-1">
            <ChevronRightIcon className="inline-block h-6 w-6 rounded-md stroke-1" />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
