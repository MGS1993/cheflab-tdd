import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BackButton = ({ visibility, clicked }) => {
  return visibility ? (
    <div style={visibleWrapper} onClick={clicked}>
      <AiOutlineArrowLeft color="white" />
    </div>
  ) : (
    <div style={{ ...visibleWrapper, ...invisibleWrapper }}>
      <AiOutlineArrowLeft />
    </div>
  );
};

const visibleWrapper = {
  alignItems: "center",
  alignSelf: "center",
  backgroundColor: "dodgerblue",
  borderRadius: "25px",
  display: "flex",
  justifyContent: "center",
  height: "50px",
  marginBottom: "10px",
  width: "50px",
};

const invisibleWrapper = {
  opacity: "0",
};

export default BackButton;
