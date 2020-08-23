import React from "react";
import "../styles/button.scss";

const handleScrollToProjects = () => {
  window.scrollTo({
    top: 695,
    behavior: "smooth",
  });
};

export default function Button({ text }) {
  return (
    <button className="btn" onClick={handleScrollToProjects}>
      {text}
    </button>
  );
}
