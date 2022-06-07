import React from "react";
import "./favorites.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import { clothes } from "../../assets/clothes-data";
import { accessories } from "../../assets/accessories-data";
import { home } from "../../assets/home-data";

const Favorites = () => {
  return (
    <section id="favorites">
      <div className="favorites--container">
        <div className="favorites--top-container">
          <div>
            <h5>Shop my recent</h5>
            <h1>Favorites</h1>
          </div>
        </div>
        <div className="clothing--container">
          <h3>Clothing</h3>
          <Swiper
            style={{
              "--swiper-navigation-color": "#294C60",
              "--swiper-pagination-color": "#294C60",
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
            {clothes.map(({ img, name, link, date }, index) => {
              return (
                <SwiperSlide className="swiper-slide">
                  <img src={img} alt="Avatar One" />
                  <h5 className="name">{name}</h5>
                  <div className="link-date">
                    <a href={link}>Link</a>
                    <h5>{date}</h5>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="accessories--container">
          <h3>Accessories</h3>
          <Swiper
            style={{
              "--swiper-navigation-color": "#294C60",
              "--swiper-pagination-color": "#294C60",
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
            {accessories.map(({ img, name, link, date }, index) => {
              return (
                <SwiperSlide className="swiper-slide">
                  <img src={img} alt="Avatar One" />
                  <h5 className="name">{name}</h5>
                  <div className="link-date">
                    <a href={link}>Link</a>
                    <h5>{date}</h5>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="accessories--container">
          <h3>Home</h3>
          <Swiper
            style={{
              "--swiper-navigation-color": "#294C60",
              "--swiper-pagination-color": "#294C60",
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
            {home.map(({ img, name, link, date }, index) => {
              return (
                <SwiperSlide className="swiper-slide">
                  <img src={img} alt="Avatar One" />
                  <h5 className="name">{name}</h5>
                  <div className="link-date">
                    <a href={link}>Link</a>
                    <h5>{date}</h5>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
