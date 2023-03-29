import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import "swiper/css"
import "swiper/css/pagination"

const CaseStudies = props => {
  return (
    <React.Fragment>
      <div className="relative min-h-[50vh] bg-theme-secondary pt-20 text-white">
        <div className="theme-container relative">
          <h2 className="mb-20 text-4xl font-bold text-theme-primary">
            <span className="after:flex after:w-[40px] after:border-[2px] after:border-b after:border-theme-primary">
              Case Studies
            </span>
          </h2>
          {props.layout ? (
            <div className="space-y-24">
              {props.list?.map((item, index) => (
                <div
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
                  key={index}
                  className="flex space-x-20 even:flex-row-reverse even:space-x-reverse"
                >
                  <div className="layout">
                    <h3 className="mb-10 text-3xl font-bold text-white">
                      {item.caseStudiesTitle}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.caseStudiesDescription,
                      }}
                    />
                    <div className="mt-12">
                      <div className="flex space-x-5">
                        {item.graphRepeater?.map((item, index) => (
                          <div
                            key={index}
                            className="flex w-full flex-col items-center rounded-lg bg-white/10 p-3"
                          >
                            <div className="flex space-x-3">
                              <div className="text-3xl font-bold">
                                {item.graphValue}
                              </div>
                              <div>
                                <GatsbyImage
                                  image={getImage(item.imageGraph)}
                                  alt="Illustration"
                                />
                              </div>
                            </div>
                            <div className="text-xs xl:text-sm">
                              {item.smallText}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden space-y-5 text-center lg:block">
                    <div className="h-[auto] opacity-50 lg:w-[350px] xl:h-[500px] xl:w-[500px]">
                      <GatsbyImage
                        image={getImage(item.caseStudiesThumbnail)}
                        alt="Illustration"
                        class="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="absolute top-0 right-0 z-30 mr-3 mb-10 hidden justify-end space-x-3 text-white sm:flex">
                <button className="swiper-button-prev">
                  <ChevronLeftIcon className="inline-block h-8 w-8 rounded-md bg-theme-primary stroke-1" />
                </button>
                <button className="swiper-button-next">
                  <ChevronRightIcon className="inline-block h-8 w-8 rounded-md bg-theme-primary stroke-1" />
                </button>
              </div>
              <div
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration="1000"
                className=""
              >
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoHeight={true}
                  pagination={{
                    el: ".swiper-pagination",
                    type: "bullets",
                  }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: "auto",
                      spaceBetween: 15,
                      navigation: false,
                    },
                    768: {
                      slidesPerView: 1,
                      pagination: false,
                    },
                    1024: {
                      slidesPerView: 1,
                      pagination: false,
                    },
                  }}
                >
                  {props.list?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="grid grid-flow-col gap-10 xl:gap-20">
                        <div className="layout">
                          <h3 className="mb-10 text-3xl font-bold text-white">
                            {item.caseStudiesTitle}
                          </h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.caseStudiesDescription,
                            }}
                          />
                          <div className="mt-12">
                            <div className="flex space-x-5">
                              {item.graphRepeater?.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex w-full flex-col items-center rounded-lg bg-white/10 p-3"
                                >
                                  <div className="flex space-x-3">
                                    <div className="text-3xl font-bold">
                                      {item.graphValue}
                                    </div>
                                    <div>
                                      <GatsbyImage
                                        image={getImage(item.imageGraph)}
                                        alt="Illustration"
                                      />
                                    </div>
                                  </div>
                                  <div className="text-xs xl:text-sm">
                                    {item.smallText}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="hidden space-y-5 text-center lg:block">
                          <div className="h-[auto] opacity-50 lg:w-[350px] xl:h-[500px] xl:w-[500px]">
                            <GatsbyImage
                              image={getImage(item.caseStudiesThumbnail)}
                              alt="Illustration"
                              class="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default CaseStudies
