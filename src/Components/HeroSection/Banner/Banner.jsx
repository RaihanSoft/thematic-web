import { FaBootstrap, FaReact } from 'react-icons/fa6';
import { RiTailwindCssLine } from 'react-icons/ri';
const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-500 to-purple-50 h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Decorative Floating Icons */}
      <div className="absolute top-40 left-52 animate-bounce-slow  ">
        <div className="w-12 h-12 text-white border border-white  animate-spin bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300">
          <FaReact />
        </div>
      </div>
      <div className="absolute top-80 left-80 animate-bounce-slow">
        <div className="w-12 h-12 text-white border border-gray-400  bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition duration-300">
          <RiTailwindCssLine className="animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-96 left-52 animate-bounce-slow">
        <div className="w-12 h-12 text-white border border-gray-400  bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition duration-300">
          <FaBootstrap className="animate-bounce" />
        </div>
      </div>

      <div className="absolute top-40 right-52 animate-bounce-slow">
        <div className="w-12 h-12 animate-spin  text-white border border-gray-400  bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300">
          <FaReact />
        </div>
      </div>
      <div className="absolute top-80 right-80 animate-bounce-slow">
        <div className="w-12 h-12 text-white border  border-gray-400  bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-500 transition duration-300">
          <RiTailwindCssLine className="animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-96 right-52 animate-bounce-slow">
        <div className="w-12 h-12 text-white border border-gray-400  bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-500 transition duration-300">
          <FaBootstrap className="animate-bounce" />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center text-black max-w-3xl mb-72">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Sell Anything, Reach Everywhere
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Start selling your products effortlessly with Themntic Web and grow
          your business with our intuitive platform.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex items-center justify-center ">
          <div className="relative flex w-full max-w-xl shadow-lg rounded-xl">
            <input
              type="text"
              placeholder="Search for products, categories..."
              className="w-full py-3 px-5 rounded-l-xl shadow-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 bg-purple-900 text-white rounded-r-xl hover:bg-white-700 transition duration-300 flex items-center justify-center focus:ring-2 focus:ring-white-500">
              {/* Add Icon in the Button */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11H3m12 0l-4-4m4 4l-4 4"
                />
              </svg>
              <span className="ml-2">Search</span>
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center space-x-4">
          <button className="px-6 py-4 bg-purple-600 hover:bg-purple-700  rounded-xl  text-white  shadow-md font-semibold">
            List Your Product Now
          </button>
          <button className="px-6 py-4  hover:bg-gray-700 text-purple-600 font-semibold rounded-xl border-2 border-purple-700 ">
            Learn More About Selling
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
