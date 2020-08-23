import React from "react";
import "../styles/button.scss";

export default function Button({ text }) {
  return <button className="btn">{text}</button>;
}
