import React from "react";
import circle from "../assets/hand-drawn.png";
import cofeebanner from "../assets/coffee-banner.webp";

export default function SectionFive() {
  return (
    <section className="w-full bg-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="p-2 md:p-6 lg:p-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Instant Coffee At Your Home
          </h2>

          <p className="text-gray-700 mb-6 text-lg max-w-xl text-justify">
            Revitalize your day with the crisp, refreshing taste of MyAlowishus
            bottled orange brew, or savor the comforting richness of our
            flavorful coffees, crafted to perfection.
          </p>

          <div>
            <button
              type="button"
              className=" text-center gap-2 px-5 py-3 border border-black hover:bg-white hover:text-black bg-black text-white rounded-md font-medium shadow hover:brightness-95 transform transition duration-150 active:scale-95"
            >
              Download App
            </button>
          </div>
        </div>
        <div className="p-0 m-0 w-full  h-80 md:h-120 relative overflow-hidden flex flex-col justify-center items-center md:flex md:items-center md:justify-center">
          <img
            src={circle}
            alt="Cozy coffee shop interior"
            className="w-70 sm:w-80 md:w-100 max-w-3xl h-54 md:h-[350px]  block"
            loading="lazy"
          />
          <div className="absolute  sm:top-8 sm:left-52 md:top-0 md:left-35">
            <img
              src={cofeebanner}
              alt="Cozy coffee shop interior"
              className="w-40 md:w-60 h-64 md:h-[460px] block transform -rotate-20 sm:-rotate-12"
              loading="lazy"
            />
          </div>
          <div className="absolute  sm:top-8 sm:ml-9  md:top-0 md:left-45 ">
            <img
              src={cofeebanner}
              alt="Cozy coffee shop interior"
              className="w-40 md:w-60 h-64 md:h-[460px]  block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
