import React from "react";

const VedioContent = ({
  vedioSrc = "https://www.youtube.com/embed/vB1pY2PG1cg?si=GGotktB34aiOI5i9",
  vedioinfo,
}) => {
  return (
    <div className="p-4" key={vedioinfo._id}>
      <iframe
        width="100%"
        height="515"
        style={{ borderRadius: "10px", border: "3px solid white" }}
        src={vedioinfo.vedioUrl ? vedioinfo.vedioUrl : vedioSrc}
        title="Kandokar.com"
        frameborder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VedioContent;
