// src/components/Carousel/Carousel.jsx
import React, { useEffect, useRef } from "react";
// Swiper react components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
// Swiper styles
import "swiper/css";

import cafe from "../assets/cafe.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionTwo({ slides = [] }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    // initialize AOS once after component mounts
    AOS.init({
      duration: 700, // default animation duration in ms
      easing: "ease-out", // easing
      once: false, // animate every time element is scrolled into view (set true to animate only once)
      offset: 120, // offset (in px) from the original trigger point
      mirror: false, // whether elements should animate out while scrolling past them
    });

    // optional: refresh AOS after everything is loaded
    // (useful if images are large and change layout)
    const onLoad = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);
  return (
    <section className="w-full max-w-7xl mx-auto py-6 px-4 bg-gray-100">
      <Swiper
        // load modules
        modules={[Autoplay, Mousewheel]}
        slidesPerView={1}
        loop={true}
        spaceBetween={20}
        // autoplay settings
        autoplay={{
          delay: 3000, // 3s
          disableOnInteraction: false, // keep autoplay after user interacts
          pauseOnMouseEnter: false, // set true if you want hover to pause
        }}
        // allow dragging with mouse & show grab cursor
        grabCursor={true}
        // enable mousewheel scroll to change slides
        mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        // when slide changes, call AOS.refresh() so elements inside newly-visible slide animate
        onSlideChange={() => {
          // small timeout to let DOM settle, then refresh AOS
          setTimeout(() => AOS.refresh(), 50);
        }}
        className="mySwiper"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            {/* slide card: responsive 2-col layout */}
            <div className="bg-slate-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Text column */}
                <div className="p-6 md:p-10">
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

                {/* Image column */}
                <div
                  className=" w-full relative"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="150"
                >
                  <div className="absolute top-[-20px] right-25 z-10 opacity-70">
                    <img src={cafe} alt="" className="h-20 w-20" />
                  </div>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-[400px] block"
                    loading="lazy"
                    onLoad={() => AOS.refresh()}
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
