import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Navigation } from "swiper"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import "swiper/css"

const SubcategoriesSlider = props => {
  return (
    <React.Fragment>
      {props.data?.length ? (
        <div className="theme-container relative">
          <div className="inline-grid w-full overflow-hidden">
            <div className="w-full overflow-hidden">
              <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                slidesPerView="auto"
                navigation={{
                  nextEl: `.swiper-button-next-${props.id}`,
                  prevEl: `.swiper-button-prev-${props.id}`,
                }}
              >
                {props.data.map((item, index) =>
                  item.count !== null ? (
                    <SwiperSlide key={index} className="!w-auto">
                      <div>
                        <Link
                          to={item.uri}
                          className="flex items-center justify-center space-x-2 rounded-lg bg-theme-light p-3 text-center"
                        >
                          {item.acfCategory.categoryIcon ? (
                            <GatsbyImage
                              image={item.acfCategory.categoryIcon.gatsbyImage}
                              alt="Illustration"
                            />
                          ) : null}

                          <span>{item.name}</span>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ) : null
                )}
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
          </div>
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default SubcategoriesSlider
