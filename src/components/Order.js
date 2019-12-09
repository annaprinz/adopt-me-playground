import React from 'react';
import { formatPrice } from './../helpers';

class Order extends React.Component {
	renderOrder = (key) => {
		const dog = this.props.dogs[key];
		const count = this.props.order[key];
		const isAvailable = dog && dog.status === 'available';
		if (!isAvailable) {
			return <li>Sorry {dog ? dog.name : 'dog'} is no longer available</li>;
		}
		return (
			<li key={key}>
				{count} amount: {dog.name}
				{formatPrice(count * dog.price)}
			</li>
		);
	};
	render() {
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key) => {
			const dog = this.props.dogs[key];
			const count = this.props.order[key];
			const isAvailable = dog && dog.status === 'available';
			if (isAvailable) {
				return prevTotal + count * dog.price;
			}
			return prevTotal;
		}, 0);

		return (
			<div className="order-wrap">
				<h2>Order</h2>
				<ul>{orderIds.map(this.renderOrder)}</ul>

				<div className="total">
					Total:
					<strong>{formatPrice(total)}</strong>
				</div>
			</div>
		);
	}
}
export default Order;
