import React from "react";
import ButtonScroll from "./ButtonScroll";
import "../styles/home.scss";

export default function Greetings() {
  return (
    <div className="greetings-section flex-col">
      <div className="greetings">
        <h1>
          Bonjour, je m'appelle Paul<span> </span>
          <span role="img" aria-label="hello">
            👋
          </span>
          <br />
          Développeur fullstack javascript
        </h1>
        <ButtonScroll text={"À propos"} />
      </div>
    </div>
  );
}
