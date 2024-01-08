import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./feedbackstyle.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import profile from "../components/profile";

const Feedback = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <section className=" section section-testimonial">
        <div className="feed-container">
          <h1 className="commom-heading">What Our Client Say</h1>
        </div>

        <Swiper
          slidesPerView={isMobile ? 1 : 2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-client-msg">
              <RiDoubleQuotesL className="right-quote" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                odit non aliquid ipsam consequatur. Nisi doloribus non
                voluptatibus eligendi sed cum maiores officiis omnis facere
                numquam, consectetur voluptatem.
              </p>
              <RiDoubleQuotesR className="left-quote" />
            </div>
            <div className="swiper-client-data grid grid-cols-2">
              <div className="client-profile">
                <img src={profile.profile1} alt="" />
              </div>

              <div className="client-data-details">
                <h4 className=" text-lg text-slate-500">John Doe</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <RiDoubleQuotesL className="right-quote" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                odit non aliquid ipsam consequatur. Nisi doloribus non
                voluptatibus eligendi sed cum maiores officiis omnis facere
                numquam, consectetur voluptatem.
              </p>
              <RiDoubleQuotesR className="left-quote" />
            </div>
            <div className="swiper-client-data grid grid-cols-2">
              <div className="client-profile">
                <img src={profile.profile2} alt="" />
              </div>

              <div className="client-data-details">
                <h4 className=" text-lg text-slate-500">Chimki</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <RiDoubleQuotesL className="right-quote" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                odit non aliquid ipsam consequatur. Nisi doloribus non
                voluptatibus eligendi sed cum maiores officiis omnis facere
                numquam, consectetur voluptatem.
              </p>
              <RiDoubleQuotesR className="left-quote" />
            </div>
            <div className="swiper-client-data grid grid-cols-2">
              <div className="client-profile">
                <img src={profile.profile3} alt="" />
              </div>

              <div className="client-data-details">
                <h4 className=" text-lg text-slate-500">Cheems</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <RiDoubleQuotesL className="right-quote" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                odit non aliquid ipsam consequatur. Nisi doloribus non
                voluptatibus eligendi sed cum maiores officiis omnis facere
                numquam, consectetur voluptatem.
              </p>
              <RiDoubleQuotesR className="left-quote" />
            </div>
            <div className="swiper-client-data grid grid-cols-2">
              <div className="client-profile">
                <img src={profile.profile4} alt="" />
              </div>

              <div className="client-data-details">
                <h4 className=" text-lg text-slate-500">Thor</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-client-msg">
              <RiDoubleQuotesL className="right-quote" />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                odit non aliquid ipsam consequatur. Nisi doloribus non
                voluptatibus eligendi sed cum maiores officiis omnis facere
                numquam, consectetur voluptatem.
              </p>
              <RiDoubleQuotesR className="left-quote" />
            </div>
            <div className="swiper-client-data grid grid-cols-2">
              <div className="client-profile">
                <img src={profile.profile5} alt="" />
              </div>

              <div className="client-data-details">
                <h4 className=" text-lg text-slate-500">Hulk</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Feedback;
