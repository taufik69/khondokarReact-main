import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../../src/assets/react.svg";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux'
import { getTotal } from "../../../lib/features/addToCart/addtoCart.js";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch]);

  const { cart } = useSelector((state) => state);

  const menuItem = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Product", path: "/product" },
    { id: 3, title: "Video", path: "/video" },
    { id: 4, title: "Client", path: "/client" },
    { id: 5, title: "Award", path: "/award" },
    { id: 6, title: "What We Do", path: "/whatwedo" },
    { id: 7, title: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {(location.pathname === "/" || location.pathname === "/cart") && (
        <nav className="fixed start-0 top-0 z-10 w-full border-b border-gray-200 bg-header_footer_background_color">
          <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4 md:flex-nowrap">
            <Link to="/" className="hidden items-center space-x-3 md:mr-5 md:block rtl:space-x-reverse">
              <img src={logo} alt="Logo" loading="lazy" className="mix-blend-color-dodge" />
            </Link>

            <div className="flex w-full justify-between md:order-2 md:w-fit md:space-x-0 rtl:space-x-reverse">
              <div className="flex items-center justify-center">
                <div className="relative flex w-full max-w-md items-center">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className={`text-sm ml-6 w-full rounded-full py-2 pl-4 pr-16 text-gray-900 focus:outline-none focus:ring-2 ${
                      cart?.totoalCartItem ? "bg-white" : ""
                    }`}
                  />
                  <button className="absolute right-0 top-0 h-full rounded-full border-[3px] border-primary_font_color bg-orange-500 px-6 text-white hover:bg-orange-600 focus:outline-none">
                    Search
                  </button>
                </div>
              </div>

              {/* Cart button */}
              <div className="block md:hidden pl-4 relative mt-2">
                <Link to="/cart">
                  <span className="relative">
                    <IoCartOutline className="w-[30px] h-[30px] text-stone-100" />
                    <span className="absolute top-[-19%] right-[-102%] flex h-10 w-10 z-50 animate-pulse">
                      <span className="relative flex justify-center items-center bg-orange_color text-white tex-3xl rounded-full h-7 w-7 border border-gray-100">
                        {cart?.totoalCartItem || "0"}
                      </span>
                    </span>
                  </span>
                </Link>
              </div>

              {/* Collapse button */}
              <button
                type="button"
                className="text-sm inline-flex h-10 w-10 ml-5 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>

              {/* Sign Up / Sign In Buttons */}
              {!cart?.totoalCartItem && (
                <div className="hidden sm:hidden xl:block">
                  <div className="flex space-x-3">
                    <Link to="/signup">
                      <button className="signUp rounded-full border-2 border-primary_font_color px-6 py-2 text-white focus:outline-none focus:ring-1 sm:ml-3">
                        Sign Up
                      </button>
                    </Link>
                    <Link to="/signin">
                      <button className="signUp rounded-full border-2 border-orange-500 px-6 py-2 text-primary_font_color focus:outline-none focus:ring-0">
                        Sign in
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Menu */}
            <div className="hidden w-full flex-wrap items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
              <ul className="mt-4 flex flex-col h-[90vh] md:h-11 items-center rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
                {menuItem.map((item) => (
                  <li
                    className="font-bold cursor-pointer menu font-sans_serif text-para_font_size text-primary_font_color transition-all w-full"
                    key={item.id}
                    style={{ fontWeight: "400" }}
                  >
                    <Link
                      to={item.path}
                      className="my-2 block rounded bg-transparent border md:border-0 border-gray-200 px-3 py-2 text-center text-white md:bg-transparent md:p-0"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}

                <hr className="mt-5 md:hidden" />
                {cart?.totoalCartItem && (
                  <div className="hidden lg:block relative mt-2">
                    <Link to="/cart">
                      <span className="relative">
                        <IoCartOutline className="w-[30px] h-[30px] text-stone-100" />
                        <span className="absolute top-[-19%] right-[-102%] flex h-10 w-10 z-50 animate-pulse">
                          <span className="relative flex justify-center items-center bg-orange_color text-white tex-3xl rounded-full h-7 w-7 border border-gray-100">
                            {cart?.totoalCartItem}
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
