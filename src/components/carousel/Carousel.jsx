import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./corousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import PropTypes from "prop-types";

const Carousel = (props) => {
   return (
     <div className="z-[-1]">
       <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper h-[60VH] lg:h-[70vh]"
       >
         <SwiperSlide>
           <img
             src="https://i.ibb.co.com/dDSwPqG/slide1.jpg"
             alt="slider 1"
             className=" bg-red-500 object-cover"
           />
         </SwiperSlide>
         <SwiperSlide>
           <img
             src="https://i.ibb.co.com/xSGpFKy/slide2.jpg"
             alt="slider 2"
             className=" bg-red-500 object-cover"
           />
         </SwiperSlide>
         <SwiperSlide>
           <img
             src="https://i.ibb.co.com/vHxqY52/slide3.jpg"
             alt="slider 3"
             className=" bg-red-500 object-cover"
           />
         </SwiperSlide>
         <SwiperSlide>
           <img
             src="https://i.ibb.co.com/2gJtGRd/slide4.jpg"
             alt="slider 4"
             className=" bg-red-500 object-cover"
           />
         </SwiperSlide>
       </Swiper>
     </div>
   );
};

Carousel.propTypes = {};

export default Carousel;
