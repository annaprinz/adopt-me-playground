import React from "react";
import AddDogForm from "./AddDogForm";
import EditDogForm from "./EditDogForm";
import PropTypes from "prop-types";

class Inventory extends React.Component {
  static propTypes = {
    dog: PropTypes.object,
    updateDog: PropTypes.func,
    deleteDog: PropTypes.func,
    loadSampleDogs: PropTypes.func,
    addDog: PropTypes.func
  };
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.dogs).map(key => (
          <EditDogForm
            key={key}
            index={key}
            dog={this.props.dogs[key]}
            updateDog={this.props.updateDog}
            deleteDog={this.props.deleteDog}
          />
        ))}
        <AddDogForm addDog={this.props.addDog} />
        <button onClick={this.props.loadSampleDogs}>Load Sample Dogs</button>
      </div>
    );
  }
}
export default Inventory;
