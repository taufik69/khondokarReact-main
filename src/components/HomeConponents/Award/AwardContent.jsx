import Image from "next/image";
import React from "react";
import img from "../../../public/assets/product/product.jpg";
const AwardContent = ({ title, awardInfo = {} }) => {
  return (
    <div className="relative" key={awardInfo?._id}>
      <Image
        src={img}
        width={500}
        height={400}
        loading="lazy"
        alt="award content"
        className="h-full w-full rounded-3xl object-cover p-2 "
      />
      <div className="iamgeOverlay ">
        {title ? (
          <Image
            src={awardInfo?.image || img}
            width={500}
            height={400}
            alt="Picture of the Award"
            loading="lazy"
            className="h-full w-full rounded-3xl object-cover p-2 "
          />
        ) : (
          <div className="p-2" key={2}>
            <iframe
              width="100%"
              height="412"
              style={{ borderRadius: "20px", border: "3px solid white" }}
              src={awardInfo?.whatwedoVedioLink}
              title="Kandokar.com"
              frameborder="2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        )}

        {title && (
          <div className="absolute left-[0%] bottom-0 sm:top-[67%] rounded-br-none bg-primary_font_color py-5 px-5 rounded-lg">
            <h3
              className=" text-[24px] sm:text-heading_font_size text-header_footer_background_color capitalize"
              style={{ fontWeight: 500, fontFamily: "serif" }}
            >
              {awardInfo.awardOwner || "Kader Khondokar"}
            </h3>
            <p
              className="text-md sm:text-para_font_size capitalize text-header_footer_background_color"
              style={{ fontWeight: 400 }}
            >
              {awardInfo.awardDesignation || "Owner Of MRS KHONKOKAR TRADERS"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AwardContent;
