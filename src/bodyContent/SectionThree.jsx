import React from "react";
import sectionImg from "../assets/coffee-mid.webp";

export default function SectionThree() {
  return (
    <section className="w-full bg-slate-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full  overflow-hidden">
          <img
            src={sectionImg}
            alt="Cozy coffee shop interior"
            className="w-full h-64 md:h-[420px]  block"
            loading="lazy"
          />
        </div>

        <div className="p-2 md:p-6 lg:p-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience the World of Alowishus
          </h2>

          <p className="text-gray-700 mb-6 text-lg max-w-xl text-justify">
            Revitalize your day with the crisp, refreshing taste of MyAlowishus
            bottled orange brew, or savor the comforting richness of our
            flavorful coffees, crafted to perfection.
          </p>

          <div>
            <button
              type="button"
              className="flex items-center mx-auto text-center gap-2 px-5 py-3 border border-black hover:bg-white hover:text-black bg-black text-white rounded-md font-medium shadow hover:brightness-95 transform transition duration-150 active:scale-95"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
