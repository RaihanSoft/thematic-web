import { NavLink } from "react-router-dom";

const Astro_Themes = ({ astroTheme }) => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-16 bg-gradient-to-r from-gray-800 to-gray-700">
        <h1 className="text-5xl font-extrabold text-teal-300 tracking-wide">
          Astro Themes
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Explore a collection of premium themes designed for excellence.
        </p>
      </header>

      {/* Cards Section */}
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 py-10 px-6">
        {astroTheme.slice(0, 6).map((astro, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Card Image */}
            <figure className="relative">
              <img
                src={astro.image?.main || "https://via.placeholder.com/300x200"}
                alt={astro.theme_name || "Astro Theme"}
                className="w-full h-60 object-cover"
              />
              {astro.price?.discounted && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 font-bold px-3 py-1 rounded-full text-sm shadow-md">
                  {astro.price.discounted}
                </div>
              )}
            </figure>

            {/* Card Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-teal-300 mb-3">
                {astro.theme_name || "Unknown Theme"}
              </h2>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {astro.description || "No description available."}
              </p>
              <ul className="mb-6 space-y-2 text-sm">
                {astro.key_features?.slice(0, 3).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <span className="text-teal-500">✔</span> {feature}
                  </li>
                ))}
                {astro.key_features?.length > 3 && (
                  <li className="text-teal-400 font-medium">+ More Features</li>
                )}
              </ul>
              <div className="flex justify-between items-center">
                <NavLink
                  to={`/astro/${astro.id}`}
                  className="text-teal-400 font-bold hover:underline"
                >
                  View Details
                </NavLink>
                <button className="bg-gradient-to-r from-teal-500 to-teal-400 text-gray-900 font-medium px-5 py-2 rounded-lg shadow hover:from-teal-400 hover:to-teal-300 transition-all">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* View All Button */}
      <footer className="text-center py-10">
        <NavLink to={"/all_astro"}>
          <button className="bg-gradient-to-r from-green-500 to-green-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:from-green-400 hover:to-green-300 transition-transform transform hover:scale-105">
            View All Products
          </button>
        </NavLink>
      </footer>
    </div>
  );
};

export default Astro_Themes;
