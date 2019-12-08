import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  render() {
    return (
      <div className="adobt-me">
        <div className="tag">
          <Header tagline="Adopt me - playground" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}
export default App;
