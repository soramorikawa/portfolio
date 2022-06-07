import React from "react";
import "./music.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { clothes } from "../../assets/clothes-data";

const Music = () => {
  return (
    <section id="music">
      <div>music</div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#ADB6C4",
          "--swiper-pagination-color": "#ADB6C4",
        }}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>slide 1</SwiperSlide>
        {clothes.map(({ img, name, link, date }, index) => {
          return (
            <SwiperSlide className="swiper-slide">
              <img src={img} alt="Avatar One" />
              <h5 className="name">{name}</h5>
              <div>
                <a href={link}>Link</a>
                <h5>{date}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Music;
