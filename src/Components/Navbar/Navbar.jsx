import React from "react";
import { Link } from "react-router-dom";

const navlink = (
  <>
    <li>
      <a>Home</a>
    </li>
    <li>
      <details>
        <summary>All Theme</summary>
        <ul className="p-1 w-40 bg-[#634e75]">
          <li>
            <a>React Template</a>
          </li>
          <li>
            <a>Tailwind Template</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <a>Bundles</a>
    </li>
    <li>
      <a>Contact</a>
    </li>
    <li>
      <a>Hire Us</a>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="bg-[#432E54]">
      <div className="navbar  text-gray-50 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlink}
            </ul>
          </div>
          <Link to={"/"} className=" text-2xl">
            <div className="gap-0 font-bold tracking-wider ">
              <span className="text-[#FF4545]">Thematic</span>
              <span className="text-orange-500">Web</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end text-black">
          {/* end */}
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
          {/* end to end */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;