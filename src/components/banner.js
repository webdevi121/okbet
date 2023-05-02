import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import "swiper/css"
import "swiper/css/pagination"
const Banner = props => {
  return (
    <React.Fragment>
      <div className="relative overflow-hidden rounded-2xl">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            nextEl: `.swiper-button-next-${props.id}`,
            prevEl: `.swiper-button-prev-${props.id}`,
          }}
        >
          {props.data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.link}>
                <div className="hidden sm:block">
                  <img
                    src={item.image.sourceUrl}
                    alt="Illustration"
                    className="block"
                  />
                </div>
                <div className="sm:hidden">
                  <img
                    src={item.imageMobile.sourceUrl}
                    alt="Illustration"
                    className="block"
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
