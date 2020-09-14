import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar flex full-width space-b">
      <div className="brand">
        {/* LOGO HERE */}
        <Link to="/">
          <p className="brand-name">Paul Dickerson</p>
        </Link>
      </div>
      <div className="links">
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
