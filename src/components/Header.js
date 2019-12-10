import React from "react";
import PropTypes from "prop-types";

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
Header.propTypes = {
  tagline: PropTypes.string.isRequired
};
export default Header;
