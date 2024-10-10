import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../../src/assets/react.svg";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { getTotal } from "../../../lib/features/addToCart/addtoCart.js";
import { Link } from "react-scroll";
import "flowbite";
import { CgSmartHomeWashMachine } from "react-icons/cg";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const regex = /\/productdetails\//;
  const menuRef = useRef(null);

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, localStorage.getItem("cartItem")]);
  const [searchItem, setsearchItem] = useState([]);
  const [showSearch, setshowSearch] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const { cart, allproduct } = useSelector((state) => state);

  const menuItem = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Product", path: "/product" },
    { id: 3, title: "Video", path: "/video" },
    { id: 4, title: "Client", path: "/client" },
    { id: 5, title: "Award", path: "/award" },
    { id: 6, title: "whatWeDo", path: "/whatwedo" },
    { id: 7, title: "Contact", path: "/contact" },
  ];

  const handleNavigateToCart = (item = {}) => {
    if (pathName === "/cart" || regex.test(pathName)) {
      navigate(`/`);
    }
    setIsMenuOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // handleSearch funtion
  useEffect(() => {
    if (inputValue?.length >= 1) {
      setshowSearch(true);
      const filterData = allproduct?.products.filter((item) => {
        return item.productTitle
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      });

      setsearchItem(filterData);
    } else {
      setshowSearch(false);
    }
  }, [inputValue]);

  const handleSearch = (event) => {
    setinputValue(event.target.value);
  };

  // handleSearchItemNavigate function
  const handleSearchItemNavigate = (item = {}) => {
    navigate(`/productdetails/${item?._id}`);
    setshowSearch(false);
    setinputValue("");
  };

  return (
    <div>
      <nav className="fixed start-0 top-0 z-10 w-full  drop-shadow-2xl bg-header_footer_background_color">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between md:px-3 py-4 md:flex-nowrap">
          <div className="md:hidden lg:block">
            <Link
              to="Home"
              className="hidden items-center space-x-3 md:mr-5 md:block rtl:space-x-reverse cursor-pointer"
            >
              <img
                src={logo}
                alt="Logo"
                loading="lazy"
                className="mix-blend-color-dodge animate-spin "
              />
            </Link>
          </div>

          <div className="relative flex w-full justify-between md:order-2 md:w-fit md:justify-between md:space-x-0 rtl:space-x-reverse">
            {/* search bar and button */}
            <div className="flex items-center justify-between">
              <div className="relative flex w-full lg:w-[80%] 2xl:w-full  max-w-md items-center ">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleSearch}
                  placeholder="Search Here..."
                  className={`text-sm ml-6 w-full rounded-full xl:w-[240px] 2xl:w-[500px] py-2 pl-4 pr-16 md:pr-4 text-gray-900 focus:outline-none focus:ring-2 ${
                    cart?.totoalCartItem ? "bg-white w-[150%] xl:w-[500px]" : ""
                  }`}
                />
                <button className="absolute right-0 top-0 h-full rounded-full md:hidden xl:block xl:right-[-29%] 2xl:right-0 border-[3px] border-primary_font_color bg-orange-500 px-6 text-white hover:bg-orange-600 focus:outline-none">
                  Search
                </button>
              </div>
            </div>

            {/* Cart button */}
            <div
              className="block md:hidden pl-4 relative mt-2 cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <span className="relative">
                <IoCartOutline className="w-[30px] h-[30px] text-stone-100" />
                <span className="absolute top-[-19%] right-[-102%] flex h-10 w-10 z-50 animate-pulse">
                  <span className="relative flex justify-center items-center bg-orange_color text-white tex-3xl rounded-full h-7 w-7 border border-gray-100">
                    {cart?.totoalCartItem}
                  </span>
                </span>
              </span>
            </div>
            {/* Cart button */}
            {/* Collapse button */}
            <button
              ref={menuRef}
              data-collapse-toggle="navbar-taufik"
              type="button"
              className="text-sm inline-flex h-10 w-10 ml-5 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-taufik"
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
              <div className="hidden lg:block lg:w-[80%] w-1/2  ">
                <div className="flex space-x-3 lg:flex-col xl:flex-row lg:gap-y-2 xl:gap-y-0">
                  <button
                    className="signUp rounded-full border-2 border-primary_font_color px-6 py-2 text-white focus:outline-none focus:ring-1 sm:ml-3 "
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>

                  <button
                    className="signUp rounded-full border-2 border-orange-500 px-6 py-2 text-primary_font_color focus:outline-none focus:ring-0"
                    onClick={() => navigate("/signin")}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            )}
            {/* Sign Up / Sign In Buttons */}
          </div>

          {/* search result  */}
          {showSearch && (
            <div class="absolute px-4 sm:px-0 sm:right-[47%] md:right-[2%] lg:right-[15%] xl:right-[14%] top-[80%] w-full sm:w-[50%] lg:w-[25%] z-50 ">
              <ul className="bg-white border border-gray-100 w-full mt-2 rounded-xl py-10">
                {searchItem?.map((item) => (
                  <li
                    className="pl-8 pr-2 py-4 flex items-center gap-x-3  font-sans_serif border-b-2 border-gray-100 relative cursor-pointer hover:bg-gray-200 hover:text-gray-900"
                    onClick={() => handleSearchItemNavigate(item)}
                  >
                    <span className="text-orange-500 text-2xl">
                      <CgSmartHomeWashMachine />
                    </span>
                    {item?.productTitle}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* search result  */}

          {/* Navigation Menu */}

          <div
            id={"navbar-taufik"}
            className={
              isMenuOpen
                ? "hidden w-full"
                : "hidden w-full flex-wrap items-center justify-between md:order-1 md:flex md:w-auto"
            }
          >
            <ul className="mt-4 flex flex-col overflow-y-scroll lg:overflow-y-clip h-[90vh] md:h-11 items-center rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
              {menuItem.map((item) => (
                <li
                  className="font-bold cursor-pointer menu font-sans_serif text-para_font_size text-primary_font_color transition-all w-full"
                  key={item.id}
                  style={{ fontWeight: "400" }}
                >
                  <span onClickCapture={() => handleNavigateToCart(item)}>
                    <Link
                      to={`${item.title}`}
                      smooth={true}
                      duration={400}
                      className="my-2 block rounded bg-transparent border md:border-0 border-gray-200 px-3 py-2 text-center text-white md:bg-transparent md:p-0"
                    >
                      {item.title}
                    </Link>
                  </span>
                </li>
              ))}

              <hr className="mt-5 md:hidden" />
              {cart?.totoalCartItem !== 0 && (
                <div
                  className="hidden lg:block relative mt-2 cursor-pointer"
                  onClick={() => navigate("/cart")}
                >
                  <span className="relative">
                    <IoCartOutline className="w-[30px] h-[30px] text-stone-100" />
                    <span className="absolute top-[-19%] right-[-102%] flex h-10 w-10 z-50 animate-pulse">
                      <span className="relative flex justify-center items-center bg-orange_color text-white tex-3xl rounded-full h-7 w-7 border border-gray-100">
                        {cart?.totoalCartItem}
                      </span>
                    </span>
                  </span>
                </div>
              )}
              {/* Sign Up / Sign In Buttons for medium device to large */}
              {cart?.totoalCartItem == 0 && (
                <div className="block md:hidden pb-8">
                  <div className="flex  space-x-3">
                    <button
                      className="signUp  rounded-full border-2 border-primary_font_color px-4  sm:px-16 py-2 text-white focus:outline-none focus:ring-1 sm:ml-3 "
                      onClick={() => navigate("/signup")}
                    >
                      Sign Up
                    </button>

                    <button
                      className="signUp rounded-full border-2 border-orange-500 px-4  sm:px-16 py-2 text-primary_font_color focus:outline-none focus:ring-0"
                      onClick={() => navigate("/signin")}
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              )}
              {/* Sign Up / Sign In Buttons */}
            </ul>
          </div>

          {/* Navigation Menu */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
