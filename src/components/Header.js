import React from "react";

//Converting Header to stateless functional component, with arrow func.
const Header = props => (
  <header className="top">
    <h1>
      Adoption
      <span className="ofThe">
        <span className="of">OF</span>
      </span>
      Dogs
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);
export default Header;
