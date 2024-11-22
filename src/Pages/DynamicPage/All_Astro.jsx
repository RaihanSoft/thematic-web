

import { useLoaderData } from "react-router-dom";
import FilterButtons from "../../Components/Common/FilterButton";

const All_Astro = () => {
  const allAstro = useLoaderData();

  return (
    <>
      {/* Header Section */}
      <div className="text-center my-16">
        <h2 className="text-6xl font-extrabold text-gray-800 mb-6">
          Discover Astro Themes
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore beautifully designed themes powered by the Astro static site generator. Perfect for businesses, agencies, and personal portfolios.
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-center mb-12">
        <FilterButtons />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 xl:px-20">
        {allAstro.map((astro) => (
          <div
            key={astro.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            {/* Card Image */}
            <div className="relative">
              <img
                src={astro.image.main}
                alt={astro.theme_name}
                className="w-full h-56 object-cover rounded-lg "
              />
              {/* Badge for Discounted Price */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white px-3 py-1 text-xs font-bold rounded-full">
                {astro.price.discounted}
              </div>
              {/* Badge for Original Price */}
              {astro.price.original !== astro.price.discounted && (
                <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 text-xs font-bold rounded-full line-through">
                  {astro.price.original}
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                {astro.theme_name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{astro.description}</p>

              {/* Key Features */}
              <ul className="space-y-1 text-gray-500 text-sm">
                {astro.key_features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-teal-500">✔</span> {feature}
                  </li>
                ))}
                {astro.key_features.length > 3 && (
                  <li className="text-teal-500 font-medium">+ More Features</li>
                )}
              </ul>

              {/* Actions */}
              <div className="mt-6 flex items-center justify-between">
                <a
                  href="#"
                  className="text-teal-600 font-bold hover:underline"
                >
                  View Details
                </a>
                <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:from-teal-600 hover:to-teal-700 focus:ring-2 focus:ring-teal-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default All_Astro;
