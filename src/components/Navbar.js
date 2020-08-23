import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar flex full-width">
      <div className="logo">
        <p>Paul DKN</p>
      </div>
      <div className="links flex">
        <a href="/">Home</a>
        <a href="/">Projects</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
}
