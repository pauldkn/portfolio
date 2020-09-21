import React from "react";
import ButtonScroll from "./ButtonScroll";
import "../styles/home.scss";

export default function Greetings() {
  return (
    <div className="greetings-section flex-col space-b">
      <div className="greetings flex-col">
        <h1>
          <span className="hello">
            Hello world<span> </span>
            <span role="img" aria-label="hello">
              👋
            </span>
          </span>
          <br />
          Développeur full-stack Javascript
        </h1>
        <ButtonScroll text={"À propos"} />
      </div>
      <div className="stack flex space-b">
          <img src="./js.png" alt="javascript-logo" />
          <img src="./react.png" alt="react-logo" />
          <img src="./sass.png" alt="sass-logo" />
          <img src="./nodejs.png" alt="nodejs-logo" />
          <img src="./mongodb.png" alt="mongodb-logo" />
      </div>
    </div>
  );
}
