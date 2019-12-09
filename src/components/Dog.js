import React from 'react';
import AddDogForm from './AddDogForm';

class Dog extends React.Component {
	handleClick = () => {
		this.props.addToOrder(this.props.index);
	};
	render() {
		const { image, name, race, desc, status } = this.props.details;
		const isAvailable = status === 'available';
		return (
			<li className="tag-dog">
				<img src={image} alt={name} />
				<h3 className="dog-name">
					{name}
					<span className="price">{race}</span>
				</h3>
				<p>{desc}</p>
				<button disabled={!isAvailable} onClick={this.handleClick}>
					{isAvailable ? 'Add To Cart' : 'Sold'}
				</button>
			</li>
		);
	}
}
export default Dog;
