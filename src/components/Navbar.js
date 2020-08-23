import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar flex full-width space-b">
      <div className="logo">
        <p>Paul DKN</p>
      </div>
      <div className="links flex space-b">
        <a href="/">Home</a>
        <a href="/">Projects</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>
    </nav>
  );
}
