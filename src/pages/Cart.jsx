
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";

import Image from "next/image";
import Link from "next/link";
import {
  RemoveItemCart,
  ProductIncrement,
  productDecrement,
  getTotal,
} from "../lib/features/addtoCart/addtoCartSlilce";

const page = () => {
  const dispath = useAppDispatch();
  const [realtime, setrealtime] = useState(false);
  const { cart } = useAppSelector((state) => state);

  useEffect(() => {
    dispath(getTotal());
  }, [realtime]);
  // handleRemove functiom
  const handleRemove = (item = {}) => {
    dispath(RemoveItemCart(item));
    setrealtime(!realtime);
  };

  //handleIncrement function
  const handleIncrement = (item = {}) => {
    dispath(ProductIncrement(item));
    setrealtime(!realtime);
  };

  // handledecrement function implement
  const handledecrement = (item = {}) => {
    dispath(productDecrement(item));
    setrealtime(!realtime);
  };
  return (
    <div className="bg-header_footer_background_color py-8  md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2
          className="text-xl   text-primary_font_color text-[40px] font-sans_serif sm:text-2xl mt-20"
          style={{ fontWeight: "500" }}
        >
          Shopping Cart {cart?.CartTtem?.length}
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 ">
          <div className="mx-auto w-full flex-none  lg:max-w-2xl xl:max-w-4xl  ">
            {cart?.CartTtem?.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border-[1px] border-gray-600 my-6  bg-gray-800 p-4 shadow-sm  md:p-6"
              >
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <Link href="/" className="shrink-0 md:order-1">
                    <Image
                      className="h-20 w-20 "
                      src={item.image}
                      alt="imac image"
                      width={100}
                      height={100}
                    />
                  </Link>

                  <label for="counter-input" className="sr-only">
                    Choose quantity:
                  </label>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button
                        type="button"
                        id="decrement-button"
                        onClick={() => handledecrement(item)}
                        data-input-counter-decrement="counter-input"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-600 bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 "
                      >
                        <svg
                          className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="counter-input"
                        data-input-counter
                        className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none  dark:text-white"
                        placeholder=""
                        disable
                        value={item.cartQuantity}
                        required
                      />
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="counter-input"
                        onClick={() => handleIncrement(item)}
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-600 bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 "
                      >
                        <svg
                          className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900 dark:text-white">
                        <span className="text-[25px]">&#2547;</span>{" "}
                        {item.productPrice
                          ? item.productPrice * item.cartQuantity
                          : "Missing"}
                      </p>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <Link
                      href="/"
                      className="text-base font-medium text-gray-900 font-sans_serif  hover:underline dark:text-white"
                    >
                      {item ? item.productTitle : "missing"}
                    </Link>

                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                          />
                        </svg>
                        Add to Favorites
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        onClick={() => handleRemove(item)}
                      >
                        <svg
                          className="me-1.5 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* right side order summary */}
          <div className="mx-auto mt-6 pt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-sm ">
              <p className="text-xl font-semibold text-white font-sans_serif ">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-400 ">
                      Total Items
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      {cart?.totoalCartItem}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-600 pt-2 ">
                  <dt className="text-base font-bold text-primary_font_color ">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-primary_font_color ">
                    <span className="text-[25px]">&#2547;</span>
                    {cart?.TotalAmount}
                  </dd>
                </dl>
              </div>

              <Link
                href="/signup"
                className="flex w-full items-center justify-center rounded-lg bg-orange_color px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <Link
                  href="/"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary_font_color  underline hover:no-underline dark:text-primary-500"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-sm  sm:p-6">
              <form className="space-y-4">
                <div>
                  <label
                    for="voucher"
                    className="mb-2 block text-sm font-medium text-primary_font_color "
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-orange_color px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
          {/* right side order summary */}
        </div>
      </div>
    </div>
  );
};

export default page;
