import React from "react";
import PropTypes from "prop-types";

class AddDogForm extends React.Component {
  nameRef = React.createRef();
  raceRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  imageRef = React.createRef();
  descRef = React.createRef();
  static propTypes = {
    addDog: PropTypes.func
  };

  createDog = e => {
    e.preventDefault();
    console.log("Creating a Dog 🐕");
    const dog = {
      name: this.nameRef.current.value,
      race: this.raceRef.current.value,
      price: this.priceRef.current.value,
      status: this.statusRef.current.value,
      image: this.imageRef.current.value,
      desc: this.descRef.current.value
    };
    this.props.addDog(dog);
    //refresh the form:
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="dog-edit" onSubmit={this.createDog}>
        <input name="name" ref={this.nameRef} type="text" placeholder="name" />
        <input name="race" ref={this.raceRef} type="text" placeholder="race" />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="avaliable">Ready</option>
          <option value="unavailable">Sold!</option>
        </select>

        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="image"
        />
        <textarea
          name="desc"
          ref={this.descRef}
          type="text"
          placeholder="desc"
        />

        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}
export default AddDogForm;
