import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";

import cafe from "../assets/cafe.webp";

export default function SectionTwo({ slides = [] }) {
  return (
    <section className="w-full max-w-7xl mx-auto py-6 px-4 bg-slate-100">
      <Swiper
        modules={[Autoplay, Mousewheel]}
        slidesPerView={1}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 3000, // 3s
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        grabCursor={true}
        mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
        className="mySwiper"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="bg-slate-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Text column */}
                <div
                  className="p-6 md:p-10"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-3">
                    {s.title}
                  </h3>
                  <p className=" text-lg mb-6 w-70 sm:w-90  md:w-100">
                    {s.desc}
                  </p>

                  <div className="flex gap-3 flex-wrap ">
                    <button
                      type="button"
                      className="px-4 py-2 w-full sm:w-auto rounded-md font-semibold border border-black hover:bg-white hover:text-black bg-black text-white transform transition duration-150 active:scale-95"
                    >
                      {s.primary}
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 w-full sm:w-auto rounded-md border font-medium border-black hover:bg-black hover:text-white bg-white text-black transform transition duration-150 active:scale-95"
                    >
                      {s.secondary}
                    </button>
                  </div>
                </div>
                <div
                  className=" w-full relative mt-5 md:mt-0"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className="absolute top-[-20px] left-58 sm:top-[-25px] sm:left-64 z-10 ">
                    <img src={cafe} alt="" className="h-20 w-20" />
                  </div>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-95 h-[350px] block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
