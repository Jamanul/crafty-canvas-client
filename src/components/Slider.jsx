import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
    const [artData,setArtData]= useState([])
    useEffect(()=>{
      fetch('https://crafty-canvas-server.vercel.app/all-banner-data')
        .then(res=>res.json())
        .then(data=>setArtData(data))
    },[])
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {
        artData.map(data=><SwiperSlide className="rounded-3xl" key={data.id}><div className="relative"><img src={data.image} alt="" />
        <div className="absolute top-3/4 left-2/4">
            <p className="text-white md:text-4xl">{data.name}</p>
        </div>
        
        </div></SwiperSlide>)
      }
        
      </Swiper>
    </div>
  );
};

export default Slider;
