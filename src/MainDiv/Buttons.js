import React from "react";

const button = {
    width: "7rem",
    height: "2rem",
    background: "white",
    border: "2px solid #1b89d7",
    borderRadius: "35px",
    color: "#1b89d7",
    fontWeight: "600",
    cursor: "pointer",

    '&:hover': {
      color: "red",
      background: "#1b89d7"
    }
};

export default function Buttons(props) {
  return (
    <div className="buttons">
      <button style={button}>{props.buttonAll}</button>
    </div>
  );
}
