import React from "react";
import "./logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="logo">
        Dev<span className="logo-text">Link</span>
      </h1>
    </Link>
  );
}

export default Logo;
