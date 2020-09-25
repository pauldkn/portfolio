import React from "react";
import "../styles/button.scss";

export default function ButtonScroll({ text }) {
  const handleScrollToContact = () => {
    window.scrollTo({
      top: 10000,
      behavior: "smooth",
    });
  };

  return (
    <button className="btn" onClick={handleScrollToContact}>
      {text}
    </button>
  );
}
