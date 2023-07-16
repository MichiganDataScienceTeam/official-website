import React from "react";

export default function Wave() {
  return React.createElement(
    "svg",
    {
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 1920 100.1",
      style: {
        height: "7rem",
        width: "100%",
        transform: "rotate(180deg)",
      },
    },
    React.createElement("path", {
      fill: "#212121",
      d: "M0,0c0,0,934.4,33.4,1920,0v100.1H0L0,0z",
    })
  );
}
