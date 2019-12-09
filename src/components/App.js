import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleDogs from './../sample-dogs';
import Dog from './Dog';

class App extends React.Component {
	state = {
		dogs: {},
		order: {}
	};
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
	render() {
		return (
			<div className="adobt-me">
				<div className="tag">
					<Header tagline="Adopt me - playground" />
					<ul className="dogs">
						{Object.keys(this.state.dogs).map((key) => <Dog key={key} details={this.state.dogs[key]} />)}
					</ul>
				</div>
				<Order />
				<Inventory addDog={this.addDog} loadSampleDogs={this.loadSampleDogs} />
			</div>
		);
	}
}
export default App;
