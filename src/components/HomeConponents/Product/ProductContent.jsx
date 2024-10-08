import React from "react";
import { Link } from "react-router-dom";

const ProductContent = ({ onhandleAddToCart, productInfo }) => {
  return (
    <div className="w-full rounded-lg border border-primary_font_color bg-gray-800 opacity-90">
      <div className="h-[320px] w-full rounded-3xl">
        <img
          src={productInfo?.image}
          alt="Picture of the product"
          className="h-full w-full rounded-3xl object-cover p-5"
        />
      </div>

      <div className="px-5 pb-5">
        <h5
          className="text-para_font_size font-semibold tracking-tight font-ruda text-primary_font_color"
          style={{ fontWeight: "500" }}
        >
          {productInfo?.productTitle
            ? productInfo?.productTitle
            : "Title missing"}
        </h5>

        <div className="mb-5 mt-2.5 flex items-center">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...new Array(productInfo?.productRating)].map((_, index) => (
              <svg
                key={index}
                className="h-4 w-4 text-orange-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-semibold ms-3 rounded bg-primary_font_color px-2.5 py-0.5 text-black font-ruda">
            {productInfo?.productRating
              ? productInfo?.productRating
              : "No Review yet"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span
            className="text-primary_font_color font-ruda text-para_font_size"
            style={{ fontWeight: "500" }}
          >
            <span className="text-[25px]">&#2547;</span>{" "}
            {productInfo?.productPrice}
          </span>
          <button
            className="text-para_font_size font-sans_serif rounded-lg bg-orange_color px-5 py-2.5 text-center text-primary_font_color transition-all hover:bg-orange-800"
            style={{ fontWeight: "400" }}
            onClick={() => onhandleAddToCart(productInfo)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
