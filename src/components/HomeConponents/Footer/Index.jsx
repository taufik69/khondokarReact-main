"use client";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <>
      {(pathName === "/" || pathName === "/cart") && (
        <footer className="bg-header_footer_background_color  text-primary_font_color py-10">
          <div className="mx-auto max-w-screen-xl  px-4 flex  flex-col lg:flex-row justify-center items-center gap-y-5">
            {/* Logo and Description */}
            <div className="text-center lg:text-left font-sans_serif w-full lg:w-1/3">
              <h1 className="text-[50px]" style={{ fontWeight: "bold" }}>
                LOGO
              </h1>
              <p className="mt-4 text-xl text-justify pr-8 font-sans_serif text-primary_font_color">
                Find out more about smart factories, their market prospects, and
                key smart factory hardware.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start space-x-4">
                <FaFacebookF className="w-12 h-12 rounded-full bg-blue-700 p-3 animate-bounce duration-75 cursor-pointer" />
                <FaYoutube className="w-12 h-12 rounded-full bg-red-700 p-3 animate-bounce duration-1000 cursor-pointer" />
                <FaInstagram className="w-12 h-12 rounded-full bg-orange-600 p-3 animate-bounce duration-75 cursor-pointer" />
                <FaTwitter className="w-12 h-12 rounded-full bg-blue-500 p-3 animate-bounce duration-1000 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center md:w-full m-0 lg:ml-7  sm:flex-row flex-col gap-y-8  xl:flex-wrap justify-between gap-x-10 xl:gap-x-20 xl:ml-20">
              {/* Links Section */}
              <div className="text-start">
                <h2
                  className="text-[30px] font-sans_serif mb-4"
                  style={{ fontWeight: "500" }}
                >
                  Company
                </h2>
                <ul className="space-y-4 font-sans_serif text-xl">
                  <li>
                    <Link href="#Vedio" className="hover:text-gray-400">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#Product" className="hover:text-gray-400">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link href="#Client" className="hover:text-gray-400">
                      Client
                    </Link>
                  </li>
                  <li>
                    <Link href="#Award" className="hover:text-gray-400">
                      Award
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Address and Map */}
              <div className="text-start mr-16 sm:mr-0">
                <h2
                  className="text-[30px] font-sans_serif mb-4"
                  style={{ fontWeight: "500" }}
                >
                  Adress
                </h2>
                <ul className="space-y-4 text-xl font-sans_serif">
                  <li>
                    <Link href="#" className="hover:text-gray-400">
                      Road
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-400">
                      Zip Code
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-400">
                      Dhaka
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-400">
                      Bangladesh
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl  grow ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29248.67788700944!2d89.82061152485468!3d23.601293817446454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe2534aaa4fc7f%3A0x4daf43ffdb19a28e!2sFaridpur!5e0!3m2!1sen!2sbd!4v1727203687719!5m2!1sen!2sbd"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: "15px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-10 border-t border-gray-700 pt-12 text-center text-xs">
            <p className="font-sans_serif">
              © 2021 All rights reserved by Kader Khondokar.
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
