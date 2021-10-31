import React from "react";

import imgPlaceHolder from "../../assets/no-image-placeholder.png";

const ImageComponent = ({ id, src, alt, style }) => {
  return <img id={id} style={style} src={src ?? imgPlaceHolder} alt={alt} />;
};

export default ImageComponent;
