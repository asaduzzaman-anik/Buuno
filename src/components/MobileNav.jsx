// This Navbar will be visible on both mobile and large screen
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/categories";
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky w-full sm:w-[80%] sm:mx-auto left-0 right-0 flex justify-between items-center bg-white shadow sm:shadow-none h-14 sm:h-20 p-2">
      {/* <!-- menu bar button + search icon for mobile screen --> */}
      <div className="flex justify-between items-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
        >
          <img src="/img/icons/menu.png" alt="" className="h-4 w-4" />
        </button>
        <button type="button" className="cursor-pointer">
          <img src="/img/icons/search.png" alt="" className="h-4 w-4" />
        </button>
      </div>
      {/* <!-- brand logo --> */}
      <Link to="/" className="cursor-pointer">
        <img
          src="/img/images/logo.png"
          alt=""
          className="h-full sm:h-18 sm:w-auto w-20"
        />
      </Link>
      {/* <!-- search bar for large screen --> */}
      <div className="hidden sm:flex">
        <form action="" className="relative">
          <input
            type="text"
            name="search-bar"
            placeholder="Search products, brands or category"
            className="w-[40vw] h-12 border rounded-lg border-gray-200 focus:border-red-700  px-2 text-xl"
          />
          <button
            type="submit"
            className="bg-red-700 absolute top-0 right-0 rounded-tr-lg rounded-br-lg h-12 w-12 cursor-pointer"
          >
            <img
              src="/img/icons/search-white.png"
              alt=""
              className="h-10 w-10 p-2"
            />
          </button>
        </form>
      </div>
      {/* <!-- cart icon + sign in option --> */}
      <div className="flex justify-between items-center gap-3">
        <button type="button" className="cursor-pointer">
          <img
            src="/img/icons/cart.png"
            alt=""
            className="h-4 w-4 sm:h-6 sm:w-6"
          />
        </button>
        <a href="#" className="sm:text-xl">
          Sign in
        </a>
      </div>
      {/* MOBILE MENU */}
      {open && (
        <div className="absolute bg-red-500 top-14 left-0">
          <ul className="flex flex-col gap-7 py-5 px-2 h-screen w-fit text-white">
            {categories.map((cat) => (
              <Link
                to={cat.route_parameter}
                key={cat.id}
                className="flex justify-start items-center"
              >
                <img src={cat.icon} alt="" className="w-6 h-6 mr-2" />
                {cat.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
