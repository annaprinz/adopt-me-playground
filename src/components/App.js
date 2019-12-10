import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleDogs from "./../sample-dogs";
import Dog from "./Dog";
import base from "../base";
class App extends React.Component {
  state = {
    dogs: {},
    order: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    //First reinstate our localstorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/dogs`, {
      context: this,
      state: "dogs"
    });
  }
  componentDidUpdate() {
    //Yes...Localstorage will only work localy in browser...this is only for testing
    const storeId = this.props.match.params.storeId;
    localStorage.setItem(storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    //clean up after store is mounted
    base.removeBinding(this.ref);
  }

  addDog = dog => {
    const dogs = { ...this.state.dogs };
    dogs[`dog${Date.now()}`] = dog;
    this.setState({
      dogs: dogs
    });
  };
  loadSampleDogs = () => {
    this.setState({ dogs: sampleDogs });
  };

  addToOrder = key => {
    //Take a copy of the existing state
    const order = { ...this.state.order };
    //Add our new dog to thath dogs variable
    order[key] = order[key] + 1 || 1;
    //Set the new digs object to state
    this.setState({ order });
  };

  updateDog = (key, updatedDog) => {
    //Take a copy of the current state
    const dogs = { ...this.state.dogs };
    //Update that state
    dogs[key] = updatedDog;
    //Set that to state
    this.setState({ dogs });
  };

  render() {
    return (
      <div className="adobt-me">
        <div className="tag">
          <Header tagline="Adopt me - playground" />
          <ul className="dogs">
            {Object.keys(this.state.dogs).map(key => (
              <Dog
                key={key}
                index={key}
                details={this.state.dogs[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        {/*You could also pass it by using {..this.state}, but we should not pass the data except if we need it.*/}
        <Order dogs={this.state.dogs} order={this.state.order} />
        <Inventory
          addDog={this.addDog}
          updateDog={this.updateDog}
          loadSampleDogs={this.loadSampleDogs}
          dogs={this.state.dogs}
        />
      </div>
    );
  }
}
export default App;
