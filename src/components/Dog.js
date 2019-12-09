import React from 'react';
import AddDogForm from './AddDogForm';

class Dog extends React.Component {
	render() {
		const { image, name, race, desc, status } = this.props.details;

		return (
			<li className="tag-dog">
				<img src={image} alt={name} />
				<h3 className="dog-name">
					{name}
					<span className="price">{race}</span>
				</h3>
				<p>{desc}</p>
				<button>Add to Cart</button>
			</li>
		);
	}
}
export default Dog;
