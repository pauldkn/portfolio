import React from "react";
import ButtonScroll from "./ButtonScroll";
import "../styles/home.scss";
import roadImage from "../bg-greetings.jpg";

export default function Greetings() {
  const background = {
    backgroundImage: `url(${roadImage})`,
  };

  return (
    <section style={background} className="greetings-section flex-col space-b">
      <div className="greetings flex-col">
        <h1>
          <span className="hello">
            Bienvenue!<span> </span>
            <span role="img" aria-label="hello">
              👋
            </span>
          </span>
        </h1>
        <h2 className="bold">
          Paul Dickerson
          <br />
          Développeur full-stack Javascript
        </h2>
        <ButtonScroll text={"Contact"} />
      </div>
      {/* <div className="stack flex space-b">
          <img src="./js.png" alt="javascript-logo" />
          <img src="./react.png" alt="react-logo" />
          <img src="./sass.png" alt="sass-logo" />
          <img src="./nodejs.png" alt="nodejs-logo" />
          <img src="./mongodb.png" alt="mongodb-logo" />
      </div> */}
    </section>
  );
}
