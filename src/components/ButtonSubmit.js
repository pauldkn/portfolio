import React from "react";
import "../styles/button.scss";

export default function ButtonSubmit({ text }) {
  return (
    <button className="btn" type="submit">
      {text}
    </button>
  );
}
