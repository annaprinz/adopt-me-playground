import React from 'react';
import AddDogForm from './AddDogForm';

class Inventory extends React.Component {
	render() {
		return (
			<div className="inventory">
				<h2>Inventory</h2>
				<AddDogForm addDog={this.props.addDog} />
				<button onClick={this.props.loadSampleDogs}>Load Sample Dogs</button>
			</div>
		);
	}
}
export default Inventory;
