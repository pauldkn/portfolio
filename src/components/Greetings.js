import React from "react";
import ButtonScroll from "./ButtonScroll";
import "../styles/home.scss";

export default function Greetings() {
  return (
    <div className="greetings flex-col">
      <h1>
        Hello World<span> </span>
        <span role="img" aria-label="hello">
          👋
        </span>
      </h1>
      <ButtonScroll text={"View my work →"} />
    </div>
  );
}
