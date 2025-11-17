import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";

export default function SectionSix({ testimonials = [], smallImgs = [] }) {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Client Testimonials
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Quench your thirst with our bottled orange brew or relax with a warm,
          delicious coffee.
        </p>
        <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center justify-center md:justify-end gap-3">
            <div className="flex -space-x-3">
              {smallImgs.map((src, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full ring-2 ring-white overflow-hidden shadow-sm"
                >
                  <img
                    src={src}
                    alt={`avatar-${i}`}
                    className="w-full h-full object-cover block"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center md:text-left md:border-l-4 md:pl-4 md:border-black">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-3xl font-bold text-gray-900">4.5</span>
              <div className="flex items-center gap-1">
                <Star filled />
                <Star filled />
                <Star filled />
                <Star filled />
                <Star half />
              </div>
            </div>

            <p className="text-gray-600 max-w-xs mx-auto md:mx-0">
              Rated by 25k on google.
            </p>
          </div>
        </div>
        <div>
          <Swiper
            modules={[Autoplay, Mousewheel]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            grabCursor={true}
            mousewheel={{ forceToAxis: true, sensitivity: 0.8 }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="py-4 px-3 w-full max-w-7xl mx-auto">
                  <article className="bg-white h-full md:w-80 rounded-xl shadow-sm  shadow-gray-400">
                    <div className="  mb-4 object-cover">
                      <div className="w-full object-cover">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-full h-[40vh] object-cover object-center rounded-t-lg "
                        />
                      </div>

                      <div className="p-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold">{t.name}</h4>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} filled={i < t.stars} />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          Verified Customer
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 text-justify px-4">
                      {t.text}
                    </p>

                    <div className="pb-6">
                      <button
                        type="button"
                        className="w-50 mx-auto inline-block px-4 py-2 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition"
                      >
                        Read More
                      </button>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function Star({ filled = false, half = false }) {
  if (half) {
    return (
      <svg
        className="w-4 h-4 text-yellow-400"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfGrad)"
          d="M12 .587l3.668 7.431L23 9.748l-5.5 5.36L19.335 24 12 19.897 4.665 24 6.5 15.108 1 9.748l7.332-1.73z"
        />
      </svg>
    );
  }
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 .587l3.668 7.431L23 9.748l-5.5 5.36L19.335 24 12 19.897 4.665 24 6.5 15.108 1 9.748l7.332-1.73z" />
    </svg>
  );
}
