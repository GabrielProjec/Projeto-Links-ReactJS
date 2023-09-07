import React from "react";
import "./socials.css";

function Socials({ url, children }) {
  return (
    <a className="social" href={url} rel="noopener noreferrer" target="_blanck">
      {children}
    </a>
  );
}

export default Socials;
