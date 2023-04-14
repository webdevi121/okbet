import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
const Banner = props => {
  return (
    <React.Fragment>
      <div className="overflow-hidden rounded-2xl">
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
      </div>
    </React.Fragment>
  )
}

export default Banner
