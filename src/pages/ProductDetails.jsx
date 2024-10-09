import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../components/axios/axios.instance";
import { useLocation } from "react-router-dom";
import ScroolTop from "../components/commonCoponents/ScroolTop";

const ProductComponent = () => {
  const [allProduct, setallProduct] = useState([]);
  const pathName = useLocation();
  const productId = pathName?.pathname?.split("/")[2];

  useEffect(() => {
    const ProductFetcher = async () => {
      try {
        const { data } = await axiosInstance.get(`/product/${productId}`);
        setallProduct(data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    ProductFetcher();
  }, []);

  return (
    <>
      <div className="min-w-screen min-h-screen productpart flex items-center pt-[20%] md:pt-0 p-5 lg:p-10 overflow-hidden ">
        <div className="w-full max-w-6xl rounded-2xl opacity-85  bg-header_footer_background_color text-white shadow-xl p-10 lg:p-20 mx-auto  relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-3 md:px-10 mb-10 md:mb-0">
              <div className="relative h-[40vh] w-full">
                <img
                  src={
                    allProduct?.image ||
                    "https://pngimg.com/uploads/raincoat/raincoat_PNG53.png"
                  }
                  className="w-full border-[3px] border-gray-300 rounded-xl relative z-10 h-full object-cover shadow-2xl"
                  alt="Raincoat"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 md:px-10 ">
              <div className="mb-10">
                <h1
                  className="font-bold capitalize  font-sans_serif text-[25px] md:text-[36px] "
                  style={{ fontWeight: "500" }}
                >
                  {allProduct?.productTitle} <br />
                </h1>
                <span
                  className="font-ruda text-sm mb-3 inline-block"
                  style={{ fontWeight: "500" }}
                >
                  From Khondokar Traders
                </span>
                <p className="text-sm">
                  {allProduct?.productSummay ||
                    ` Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                  Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                  voluptates, sint enim fugiat saepe, dolor fugit, magnam
                  explicabo eaque quas id quo porro dolorum facilis...{" "}`}
                </p>
              </div>
              <div className="mb-5 mt-2.5 flex items-center">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...new Array(allProduct?.productRating)].map((_, index) => (
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
                  {allProduct?.productRating
                    ? allProduct?.productRating
                    : "No Review yet"}
                </span>
              </div>
              <div className="flex items-center">
                <div className="inline-block align-bottom mr-5">
                  <span className="text-[35px]">&#2547;</span>{" "}
                  <span className="font-bold text-[24px] leading-none align-baseline">
                    {allProduct?.productPrice || 5000}
                  </span>
                </div>
                <div className="inline-block align-bottom">
                  <Link to="/cart">
                    <button className="bg-orange_color  text-white shadow-2xl cursor-pointer font-sans_serif rounded-full px-10 py-2 font-semibold">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
