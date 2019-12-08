import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          Adoption
          <span className="ofThe">
            <span className="of">OF</span>
          </span>
          Dogs
        </h1>
        <h3 className="tagline">
          <span>Adopt me - playground</span>
        </h3>
      </header>
    );
  }
}
export default Header;
