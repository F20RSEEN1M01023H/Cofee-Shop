import React, { useState } from "react";
import logo from "../assets/alowishus-coffee.webp";

const Header = ({ CofeeMenu = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [btnOpen, setBtnOpen] = useState(false);

  return (
    <div>
      <header className="w-full bg-slate-100 border-b border-gray-300">
        <div className=" px-2 sm:px-4">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <img
                className="w-auto h-15   hover:bg-slate-200 rounded-md px-2 py-1"
                src={logo}
                alt=""
              />
            </div>
            <nav className="hidden md:flex md:items-center lg:space-x-6">
              <div className="relativex">
                <button
                  onClick={() => setBtnOpen((c) => !c)}
                  aria-expanded={menuOpen}
                  className="inline-flex items-center gap-1 text-gray-900 focus:outline-none hover:bg-gray-200 rounded-md px-2 py-1 active:bg-black/90 active:text-white"
                >
                  <span>Cafe Menu</span>
                  <svg
                    className={`h-5 w-5 ${
                      btnOpen ? "rotate-180" : ""
                    } transition-transform duration-200`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.23 3.97a.75.75 0 01-1.04 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div>
                  {btnOpen && (
                    <div className="absolute bg-black/90 text-white mt-2 rounded-xl shadow-lg py-2 w-40 z-10">
                      {CofeeMenu.map((m) => (
                        <a
                          key={m.id}
                          href="#"
                          className="block px-4 py-2 hover:bg-black/90  rounded-xl"
                        >
                          {m.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <a
                href="#"
                className="hover:bg-gray-200 rounded-md px-2 py-1 active:bg-black/90 active:text-white"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:bg-gray-200 rounded-md px-2 py-1 active:bg-black/90 active:text-white"
              >
                Find Us
              </a>
              <a
                href="#"
                className="hover:bg-gray-200 rounded-md px-2 py-1 active:bg-black/90 active:text-white"
              >
                Allowishus{" "}
                <span className="md:hidden lg:inline-flex">Catering</span>
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <button>
                <svg
                  className="h-10 w-10 rounded-full  text-black bg-gray-200 shadow-sm shadow-black p-2 hover:text-white hover:bg-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h13l-2-7M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
              </button>
              <button className="bg-black text-white hover:bg-white hover:text-black border border-black rounded-lg px-4 py-3  transition-transform active:scale-95">
                Buy Gift Vouchers
              </button>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 rounded-md focus:outline-none hover:bg-gray-100 active:scale-95 transform transition duration-150"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((c) => !c)}
              >
                <svg
                  className="h-6 w-6 text-gray-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-gray-100 my-2 px-4 pt-3 pb-4 space-y-2 border-t">
            <div className=" space-y-2">
              <button
                onClick={() => setBtnOpen((c) => !c)}
                aria-expanded={menuOpen}
                className="w-full text-left py-2 px-2 rounded-md flex items-center justify-between gap-1 text-gray-900 focus:outline-none hover:bg-gray-200  active:bg-black/90 active:text-white"
              >
                <span>Cafe Menu</span>
                <svg
                  className={`h-5 w-5 ${
                    btnOpen ? "rotate-180" : ""
                  } transition-transform duration-200`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.23 3.97a.75.75 0 01-1.04 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div>
                {btnOpen && (
                  <div className="">
                    {CofeeMenu.map((m) => (
                      <a
                        key={m.id}
                        href="#"
                        className="block hover:bg-gray-200 rounded-md px-6 py-1 active:bg-black/90 active:text-white"
                      >
                        {m.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <a
              href="#"
              className="block hover:bg-gray-200 rounded-md px-2 py-1 active:bg-black/90 active:text-white"
            >
              About Us
            </a>
            <a
              href="#"
              className="block hover:bg-gray-200 rounded-md px-2 py-1 active:bg-black/90 active:text-white"
            >
              Find Us
            </a>
            <a
              href="#"
              className="block hover:bg-gray-200 rounded-md px-2 py-1 active:bg-black/90 active:text-white"
            >
              Allowishus Catering
            </a>
            <div className="flex items-center gap-4">
              <button>
                <svg
                  className="h-10 w-10 rounded-full  text-black bg-gray-200 shadow-sm shadow-black p-2 hover:text-white hover:bg-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h13l-2-7M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
              </button>
              <button className="flex-1 bg-black text-white hover:bg-white hover:text-black border border-black rounded-lg px-4 py-3  transition-transform active:scale-95">
                Buy Gift Vouchers
              </button>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
