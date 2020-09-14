import React from "react";
import "../styles/button.scss";

export default function ButtonScroll({ text }) {
  const handleScrollToProjects = () => {
    window.scrollTo({
      top: 695,
      behavior: "smooth",
    });
  };

  return (
    <button className="btn" onClick={handleScrollToProjects}>
      {text}
    </button>
  );
}
