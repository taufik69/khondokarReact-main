import React from "react";

const Heading = ({ className, title, description }) => {
  return (
    <div className={className}>
      <h2
        className="family after:contents-[''] relative cursor-pointer font-sans_serif md:text-heading_font_size text-primary_font_color  transition-opacity after:absolute text-[35px] md:after:bottom-4 after:bottom-0 md:after:left-[102%] after:right-[0%] after:h-[3px] after:w-32 after:bg-orange_color hover:opacity-85 px-3 sm:px-0"
        style={{ fontWeight: 700 }}
      >
        {title ? title : "Our Products"}
      </h2>
      <p className="w-full bg-header_footer_background_color py-6 text-center">
        <span
          className="family inline-block w-full  px-2 md:px-0
           text-justify md:text-center  xl:max-w-[40%] lg:max-w-[60%] font-ruda text-primary_font_color"
          style={{ fontWeight: "400" }}
        >
          {description
            ? description
            : `Find out more about smart factories, their market prospects, and key
        smart factory hardware you can add to your inventory to leverage the
        boom.`}
        </span>
      </p>
    </div>
  );
};

export default Heading;
