// src/components/SectionTwo/SectionTwo.jsx
import React from "react";

export default function SectionFour({ features = [] }) {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Big centered heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Alowishus
        </h2>

        {/* Centered paragraph */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          Quench your thirst with our bottled orange brew or relax with a warm,
          delicious coffee.
        </p>

        {/* 3-col grid on md+, responsive stacking on smaller screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((f) => (
            <article
              key={f.id}
              className="bg-black/90 rounded-xl p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow duration-200"
              aria-labelledby={`feature-${f.id}-title`}
            >
              <div className="text-center mt-2 w-full">
                <h3
                  id={`feature-${f.id}-title`}
                  className="text-lg font-semibold text-white"
                >
                  {f.title}
                </h3>
                <p className="text-gray-500 w-80 sm:w-auto mx-auto mt-2">
                  {f.desc}
                </p>
              </div>
              {/* Image / Icon */}
              <div className="w-full flex justify-center">
                <div className="w-48 h-48 rounded-lg overflow-hidden bg-white shadow-sm">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full h-full object-cover block"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title & description */}

              {/* Optional CTA (small button) aligned to bottom on tall cards */}
              <div className="mt-auto w-full">
                <button
                  type="button"
                  className="mt-4 inline-block px-4 py-2 bg-white text-black rounded-md text-lg font-medium hover:bg-gray-500 hover:text-white transition"
                >
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
