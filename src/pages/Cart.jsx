import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; // React Router DOM Link
import {
  RemoveItemCart,
  ProductIncrement,
  productDecrement,
  getTotal,
} from "../lib/features/addToCart/addtoCart";
import Header from "../components/HomeConponents/Header/Index";
import Footer from "../components/HomeConponents/Footer/Index";
import { Helmet } from "react-helmet";

const CartPage = () => {
  const dispatch = useDispatch();
  const [realtime, setRealtime] = useState(false);
  const { cart } = useSelector((state) => state);
  console.log(cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [realtime]);

  // Handle Remove Item
  const handleRemove = (item = {}) => {
    dispatch(RemoveItemCart(item));
    setRealtime(!realtime);
  };

  // Handle Increment
  const handleIncrement = (item = {}) => {
    dispatch(ProductIncrement(item));
    setRealtime(!realtime);
  };

  // Handle Decrement
  const handleDecrement = (item = {}) => {
    dispatch(productDecrement(item));
    setRealtime(!realtime);
  };

  return (
    <div>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
        <meta
          name="description"
          content="Top-quality machinery and workshop equipment. Explore a wide range of industrial machines, tools, and equipment for all your manufacturing needs."
        />
        <meta
          name="keywords"
          content="machinery, workshop equipment, industrial machines, tools, manufacturing equipment, heavy machinery, industrial tools"
        />
        <meta name="robots" content="index, follow" />
        <meta name="kandokar" content="kandorkar.com" />
      </Helmet>
      <div className="bg-header_footer_background_color py-8 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2
            className="text-xl text-primary_font_color text-[40px] font-sans_serif sm:text-2xl mt-20"
            style={{ fontWeight: "500" }}
          >
            Shopping Cart {cart?.CartTtem?.length}
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              {cart?.CartTtem?.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border-[1px] border-gray-600 my-6 bg-gray-800 p-4 shadow-sm md:p-6"
                >
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <Helmet>
                      <meta charSet="utf-8" />
                      <title>Cart</title>
                      <meta
                        name="description"
                        content="Top-quality machinery and workshop equipment. Explore a wide range of industrial machines, tools, and equipment for all your manufacturing needs."
                      />
                      <meta name="keywords" content={item.productTitle} />
                      <meta name="robots" content="index, follow" />
                      <meta name="product" content={item.image} />

                      <Link to="/" className="shrink-0 md:order-1">
                        <img
                          className="h-20 w-20"
                          src={item.image}
                          alt={item.productTitle}
                          width={100}
                          height={100}
                        />
                      </Link>
                    </Helmet>
                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => handleDecrement(item)}
                          className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-600 bg-gray-700 hover:bg-gray-800"
                        >
                          <svg
                            className="h-2.5 w-2.5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          className="w-10 text-center text-sm text-white bg-transparent"
                          value={item.cartQuantity}
                          readOnly
                        />
                        <button
                          type="button"
                          onClick={() => handleIncrement(item)}
                          className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-600 bg-gray-700 hover:bg-gray-800"
                        >
                          <svg
                            className="h-2.5 w-2.5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="text-end md:w-32">
                        <p className="text-base font-bold text-white">
                          <span className="text-[25px]">&#2547;</span>{" "}
                          {item.productPrice
                            ? item.productPrice * item.cartQuantity
                            : "Missing"}
                        </p>
                      </div>
                    </div>

                    <div className="w-full space-y-4 md:max-w-md">
                      <Helmet>
                        <meta
                          name="keywords"
                          content={
                            "machinery, workshop equipment, industrial machines, tools, manufacturing equipment, heavy machinery, industrial tools" +
                            item.productTitle
                          }
                        />
                        <meta name="robots" content="index, follow" />
                        <Link
                          to="/"
                          className="text-base font-medium text-white hover:underline"
                        >
                          {item ? item.productTitle : "Missing"}
                        </Link>
                      </Helmet>

                      <div className="flex items-center gap-4">
                        <button className="text-sm text-gray-500 hover:underline">
                          Add to Favorites
                        </button>
                        <button
                          className="text-sm text-red-600 hover:underline"
                          onClick={() => handleRemove(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mx-auto mt-6 pt-6 flex-1 space-y-6 lg:mt-0">
              <div className="space-y-4 border border-gray-600 bg-gray-800 p-4 shadow-sm">
                <p className="text-xl font-semibold text-white">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-base text-gray-400">Total Items</p>
                    <p className="text-base text-green-600">
                      {cart?.totoalCartItem}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-600 pt-2">
                    <p className="text-base font-bold text-white">Total</p>
                    <p className="text-base font-bold text-white">
                      <span className="text-[25px]">&#2547;</span>
                      {cart?.TotalAmount}
                    </p>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full text-center bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600"
                >
                  Proceed to Checkout
                </Link>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-gray-500">or</span>
                  <Link
                    to="/"
                    className="text-sm font-medium text-white underline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>

              <div className="space-y-4 border border-gray-600 bg-gray-800 p-4 shadow-sm">
                <form className="space-y-4">
                  <label
                    className="text-sm font-medium text-white"
                    htmlFor="voucher"
                  >
                    Do you have a voucher or gift card?
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring focus:ring-primary-500"
                  />
                  <button
                    type="submit"
                    className="block w-full bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
