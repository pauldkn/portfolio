import React from "react";
import Button from "./ButtonScroll";

export default function Greetings() {
  return (
    <div className="greetings flex-col">
      <h1>
        Hello World
        <span role="img" aria-label="hello">
          👋
        </span>
      </h1>
      <Button text={"View my work →"} />
    </div>
  );
}
