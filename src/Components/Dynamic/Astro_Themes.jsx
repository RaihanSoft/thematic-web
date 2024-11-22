import React from "react";
import { NavLink } from "react-router-dom";

const Astro_Themes = ({ astroTheme }) => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-white py-10">
        <h2 className="text-6xl font-extrabold text-center text-gray-800 tracking-wide">
          Astro Themes
        </h2>
        <p className="text-center text-gray-600 mt-4 text-lg">
          Discover premium themes crafted for excellence.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 px-6 xl:px-20 py-10 bg-white">
        {astroTheme.slice(0, 6).map((astro, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-lg rounded-lg w-96 overflow-hidden group hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {/* Card Image */}
            <figure className="relative">
              <img
                src={astro.image?.main || "https://via.placeholder.com/300x200"}
                alt={astro.theme_name || "Astro Theme"}
                className="w-full h-56 object-cover "
              />
              {/* Price Badge */}
              {astro.price?.discounted && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-500 to-teal-400 text-white px-4 py-1 text-xs font-bold rounded-full">
                  ${astro.price.discounted}
                </div>
              )}
            </figure>

            {/* Card Body */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                {astro.theme_name || "Unknown Theme"}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {astro.description || "No description available."}
              </p>

              {/* Features */}
              <ul className="space-y-2 text-gray-500 text-sm mb-6">
                {astro.key_features?.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-teal-500">✔</span> {feature}
                  </li>
                ))}
                {astro.key_features?.length > 3 && (
                  <li className="text-teal-500 font-medium">+ More Features</li>
                )}
              </ul>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <NavLink
                  to={`/astro/${astro.id}`}
                  className="text-teal-600 font-medium hover:text-teal-400 transition-colors duration-300"
                >
                  View Details
                </NavLink>
                <button className="bg-gradient-to-r from-teal-500 to-teal-400 text-white font-semibold px-5 py-2 rounded-lg shadow-lg hover:from-teal-400 hover:to-teal-300 transition-all duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex items-center justify-center bg-white py-10">
        <NavLink to={"/all_astro"}>
          <button className="bg-gradient-to-r from-teal-500 to-teal-400 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:from-teal-400 hover:to-teal-300 transition-all duration-300">
            View All Products
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Astro_Themes;
