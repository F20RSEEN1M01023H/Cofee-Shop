import React from "react";

export default function SectionFour({ features = [] }) {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Alowishus
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
          Quench your thirst with our bottled orange brew or relax with a warm,
          delicious coffee.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20  mt-20">
          {features.map((f) => (
            <article
              key={f.id}
              className="relative bg-white rounded-xl p-6 flex flex-col items-start gap-8 shadow-lg shadow-gray-600 transition-shadow duration-200"
              aria-labelledby={`feature-${f.id}-title`}
            >
              <div className="text-left text-lg mt-2 ">
                <p className="py-2">{f.selling}</p>
                <h3
                  id={`feature-${f.id}-title`}
                  className="text-3xl font-bold text-black w-40"
                >
                  {f.title}
                </h3>
                <p className="text-gray-500 text-lg w-60 sm:w-auto mx-auto mt-3">
                  {f.desc}
                </p>
              </div>
              <div className="absolute top-[-60px] right-[-30px]">
                <div className="w-58 h-58  overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full h-full block"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-auto flex justify-between items-center w-full">
                <h1 className="text-2xl font-bold">$59.99</h1>
                <button
                  type="button"
                  className=" px-4 py-2 bg-black text-white rounded-md border border-black text-lg font-medium hover:bg-white hover:text-black transition active:scale-95"
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
