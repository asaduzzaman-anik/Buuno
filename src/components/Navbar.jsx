import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full">
      {/* <!-- navbar for both mobile + large screen--> */}
      <nav className="sticky w-full sm:w-[80%] sm:mx-auto left-0 right-0 flex justify-between items-center bg-white shadow sm:shadow-none h-14 sm:h-24 p-2">
        {/* <!-- menu bar + search icon for mobile screen --> */}
        <div className="flex justify-between items-center gap-3 sm:hidden">
          <button type="button" className="cursor-pointer">
            <img
              src="src/assets/images/icons/menu.png"
              alt=""
              className="h-4 w-4"
              onClick={() => setOpen(!open)}
            />
          </button>
          <button type="button" className="cursor-pointer">
            <img
              src="src/assets/images/icons/search.png"
              alt=""
              className="h-4 w-4"
            />
          </button>
        </div>
        {/* <!-- brand logo --> */}
        <div className="cursor-pointer">
          <img
            src="src/assets/images/logo.png"
            alt=""
            className="h-full sm:h-18 sm:w-auto w-20"
          />
        </div>
        {/* <!-- search bar for large screen --> */}
        <div className="hidden sm:flex">
          <form action="" className="relative">
            <input
              type="text"
              name="search-bar"
              placeholder="Search products, brands or category"
              className="w-[40vw] h-12 border-3 rounded-lg border-red-800  px-2 text-xl"
            />
            <button
              type="submit"
              className="bg-red-800 absolute top-0 right-0 rounded-tr-lg rounded-br-lg h-12 cursor-pointer"
            >
              <img
                src="src/assets/images/icons/search-white.png"
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
              src="src/assets/images/icons/cart.png"
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
              <li>
                <a href="#" className="flex justify-start items-center">
                  <img
                    src="src/assets/images/icons/bag.png"
                    alt=""
                    className="w-6 h-6 mr-2"
                  />
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-start items-center">
                  <img
                    src="src/assets/images/icons/shirt.png"
                    alt=""
                    className="w-6 h-6 mr-2"
                  />
                  Mens' Collection
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-start items-center">
                  <img
                    src="src/assets/images/icons/tshirt.png"
                    alt=""
                    className="w-6 h-6 mr-2"
                  />
                  Mens' T-shirt
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-start items-center">
                  <img
                    src="src/assets/images/icons/polo.png"
                    alt=""
                    className="w-6 h-6 mr-2"
                  />
                  Mens' Polo Shirt
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-start items-center">
                  <img
                    src="src/assets/images/icons/panjabi.png"
                    alt=""
                    className="w-6 h-6 mr-2"
                  />
                  Mens' Panjabi
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-start items-center">
                  <img
                    src="src/assets/images/icons/box.png"
                    alt=""
                    className="w-6 h-6 mr-2"
                  />
                  Mens' Combo Items
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-start items-center">
                  <img
                    src="src/assets/images/icons/discount.png"
                    alt=""
                    className="w-6 h-6 mr-2"
                  />
                  Hot Offers
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* <!-- second navbar for large screen only --> */}
      <div className="hidden sm:flex justify-between items-center h-20 bg-red-700 w-full">
        <ul className="w-[80%] mx-auto flex justify-between items-center gap-5 text-white text-lg">
          <li>
            <a href="#" className="flex justify-start items-center">
              <img
                src="src/assets/images/icons/bag.png"
                alt=""
                className="w-6 h-6 mr-2"
              />
              New Arrivals
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-start items-center">
              <img
                src="src/assets/images/icons/shirt.png"
                alt=""
                className="w-6 h-6 mr-2"
              />
              Mens' Collection
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-start items-center">
              <img
                src="src/assets/images/icons/tshirt.png"
                alt=""
                className="w-6 h-6 mr-2"
              />
              Mens' T-shirt
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-start items-center">
              <img
                src="src/assets/images/icons/polo.png"
                alt=""
                className="w-6 h-6 mr-2"
              />
              Mens' Polo Shirt
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-start items-center">
              <img
                src="src/assets/images/icons/panjabi.png"
                alt=""
                className="w-6 h-6 mr-2"
              />
              Mens' Panjabi
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-start items-center">
              <img
                src="src/assets/images/icons/box.png"
                alt=""
                className="w-6 h-6 mr-2"
              />
              Mens' Combo Items
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-start items-center">
              <img
                src="src/assets/images/icons/discount.png"
                alt=""
                className="w-6 h-6 mr-2"
              />
              Hot Offers
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
