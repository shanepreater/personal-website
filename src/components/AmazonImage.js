import React from "react";

const AmazonImage = ({ image, alt }) => {
  return (
    <React.Fragment>
      <a target="_blank" href={image.href}>
        <img border={0} alt={alt} src={image.mainSource} />
      </a>
      <img
        src={image.pixelSource}
        width="1"
        height="1"
        border="0"
        alt=""
        style={{ border: "none !important", margin: "0px !important" }}
      />
    </React.Fragment>
  );
};

export default AmazonImage;
