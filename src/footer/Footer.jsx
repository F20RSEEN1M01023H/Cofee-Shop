import React from "react";
import logo from "../assets/alowishus-coffee.webp";

export default function Footer({ colLinks = {} }) {
  return (
    <footer className="w-full bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-8">
          <div
            className="col-span-4"
            data-aos-anchor-placement="center-bottom"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="flex items-start gap-4">
              <img src={logo} alt="Alowishus logo" className="h-12 w-auto" />
            </div>

            <p className="mt-4 text-gray-600 max-w-sm">
              We craft the best coffee & cozy experiences. Visit our stores or
              order online to enjoy freshly brewed cups every day.
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div
            className="col-span-2"
            data-aos-anchor-placement="center-bottom"
            data-aos="zoom-in-right"
            data-aos-duration="3000"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {colLinks.company.title}
            </h4>
            <nav aria-label="Company links" className="flex flex-col gap-2">
              {colLinks.company.links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>
          <div
            className="col-span-2"
            data-aos-anchor-placement="center-bottom"
            data-aos="zoom-in-left"
            data-aos-duration="3000"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {colLinks.products.title}
            </h4>
            <nav aria-label="Products links" className="flex flex-col gap-2">
              {colLinks.products.links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          <div
            className="col-span-2"
            data-aos-anchor-placement="center-bottom"
            data-aos="zoom-in-right"
            data-aos-duration="3000"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {colLinks.resources.title}
            </h4>
            <nav aria-label="Resources links" className="flex flex-col gap-2">
              {colLinks.resources.links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>
          <div
            className="col-span-2"
            data-aos-anchor-placement="center-bottom"
            data-aos="zoom-in-left"
            data-aos-duration="3000"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-4">
              {colLinks.blogs.title}
            </h4>
            <nav aria-label="Blogs links" className="flex flex-col gap-2">
              {colLinks.blogs.links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Hammad Ashraf's Website. All rights
              reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-gray-600 hover:text-blue-500 hover:bg-gray-100 transition"
                aria-label="Twitter"
              >
                {/* Twitter */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 5.92c-.66.3-1.37.5-2.12.59a3.7 3.7 0 001.62-2.03c-.72.43-1.53.74-2.38.9A3.69 3.69 0 0015.5 4c-2.04 0-3.7 1.66-3.7 3.71 0 .29.03.58.1.85-3.07-.15-5.8-1.63-7.63-3.87a3.72 3.72 0 00-.5 1.87c0 1.29.66 2.43 1.66 3.1-.61-.02-1.18-.19-1.68-.47v.05c0 1.79 1.27 3.28 2.95 3.62-.49.14-1.01.17-1.54.06a3.72 3.72 0 003.46 2.58A7.4 7.4 0 012 19.54a10.44 10.44 0 005.64 1.65c6.77 0 10.48-5.61 10.48-10.48 0-.16 0-.31-.01-.46A7.4 7.4 0 0022 5.92z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-gray-600 hover:text-pink-500 hover:bg-gray-100 transition"
                aria-label="Instagram"
              >
                {/* Instagram */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm5 3.5A4.5 4.5 0 007.5 12 4.5 4.5 0 0012 16.5 4.5 4.5 0 0016.5 12 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 0114.5 12 2.5 2.5 0 0112 14.5 2.5 2.5 0 019.5 12 2.5 2.5 0 0112 9.5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-gray-600 hover:text-blue-700 hover:bg-gray-100 transition"
                aria-label="LinkedIn"
              >
                {/* LinkedIn */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.4c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.08 1.41-2.08 2.88v5.47h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.79zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 transition"
                aria-label="YouTube"
              >
                {/* YouTube */}
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-1-1.7-1-2.1-1.1C16.7 2.5 12 2.5 12 2.5s-4.7 0-8.6.3c-.4.1-1.3.1-2.1 1.1C.7 4.6.5 6.2.5 6.2S.2 8 .2 9.8v.4C.2 12.6.5 14.4.5 14.4s.2 1.6.8 2.3c.8 1 1.8 1 2.3 1.1 1.7.1 7.2.3 7.2.3s4.7 0 8.6-.3c.4-.1 1.3-.1 2.1-1.1.6-.7.8-2.3.8-2.3s.3-1.8.3-3.6v-.4c0-1.8-.3-3.6-.3-3.6zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="false"
        className="fixed right-4 bottom-4 z-50"
        style={{
          animation: "colorPulse 2.5s ease-in-out infinite",
        }}
      >
        <span
          className=" px-4 py-2 text-sm font-medium select-none"
          role="note"
          aria-label="Designed and developed by Hammad Ashraf"
        >
          <span className="animate-colorPulse">
            Designed And Developed by Hammad Ashraf ❤️
          </span>
        </span>
      </div>
    </footer>
  );
}
