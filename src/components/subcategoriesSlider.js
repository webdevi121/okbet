import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import "swiper/css"
import "swiper/css/pagination"

const SubcategoriesSlider = props => {
  return (
    <React.Fragment>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView="6"
          spaceBetween="15"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            320: {
              navigation: false,
            },
          }}
        >
          {props.data.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                to={item.uri}
                className="flex justify-center space-x-3 rounded-lg bg-theme-light p-3 text-center"
              >
                {item.acfCategory.categoryIcon ? (
                  <GatsbyImage
                    image={item.acfCategory.categoryIcon.gatsbyImage}
                    alt="Illustration"
                  />
                ) : null}

                <span>{item.name}</span>
              </Link>
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

export default SubcategoriesSlider
