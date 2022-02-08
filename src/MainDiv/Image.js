import React from "react";

const styles = {
  img: {
    width: "15rem",
    height: "15rem",
    padding: "10px",
  },
};

export default function Image({ source, idx}) {

  return (
    <img
      src={source}
      style={styles.img}
      
      data-idx={idx}
    />
  );
}
