import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleDogs from './../sample-dogs';
import Dog from './Dog';
import base from '../base';
class App extends React.Component {
	state = {
		dogs: {},
		order: {}
	};
	componentDidMount() {
		const { params } = this.props.match;

		this.ref = base.syncState(`${params.storeId}/dogs`, { context: this, state: 'dogs' });
	}
	addDog = (dog) => {
		const dogs = { ...this.state.dogs };
		dogs[`dog${Date.now()}`] = dog;
		this.setState({
			dogs: dogs
		});
	};
	loadSampleDogs = () => {
		this.setState({ dogs: sampleDogs });
	};

	addToOrder = (key) => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	};

	render() {
		return (
			<div className="adobt-me">
				<div className="tag">
					<Header tagline="Adopt me - playground" />
					<ul className="dogs">
						{Object.keys(this.state.dogs).map((key) => (
							<Dog key={key} index={key} details={this.state.dogs[key]} addToOrder={this.addToOrder} />
						))}
					</ul>
				</div>
				{/*You could also pass it by using {..this.state}, but we should not pass the data except if we need it.*/}
				<Order dogs={this.state.dogs} order={this.state.order} />
				<Inventory addDog={this.addDog} loadSampleDogs={this.loadSampleDogs} />
			</div>
		);
	}
}
export default App;
