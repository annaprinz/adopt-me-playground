import React from "react";

class EditDogForm extends React.Component {
  handleChange = event => {
    //update that dog:
    //Take a copy og the current dog
    const updatedDog = {
      ...this.props.dog,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateDog(this.props.index, updatedDog);
  };
  render() {
    return (
      <div className="dog-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.dog.name}
        />
        <input
          type="text"
          name="race"
          onChange={this.handleChange}
          value={this.props.dog.race}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.dog.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.dog.status}
        >
          <option value="avaliable">Ready</option>
          <option value="unavailable">Sold!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.dog.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.dog.image}
        />
      </div>
    );
  }
}
export default EditDogForm;
