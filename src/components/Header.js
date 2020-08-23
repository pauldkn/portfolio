import React from "react";
import Navbar from "./Navbar";
import Greetings from "./Greetings";

export default function Header() {
  return (
    <header className="flex-col full-width">
      <Navbar />
      <Greetings />
    </header>
  );
}
