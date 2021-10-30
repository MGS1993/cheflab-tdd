import React from "react";

import imgPlaceHolder from "../../assets/no-image-placeholder.png";

const ImageComponent = ({ id, src, alt }) => {
  return <img id={id} src={src ?? imgPlaceHolder} alt={alt} />;
};

export default ImageComponent;
