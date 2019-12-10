import React from "react";
import AddDogForm from "./AddDogForm";
import { formatPrice } from "./../helpers";
import PropTypes from "prop-types";

class Dog extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      race: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string
    }),
    addToOrder: PropTypes.func
  };
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { image, name, price, race, desc, status } = this.props.details;
    const isAvailable = status === "avaliable";
    return (
      <li className="tag-dog">
        <img src={image} alt={name} />
        <h3 className="dog-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <h4 className="dog-name">{race}</h4>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Cart" : "Sold"}
        </button>
      </li>
    );
  }
}

export default Dog;
