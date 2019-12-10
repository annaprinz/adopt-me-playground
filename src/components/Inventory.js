import React from "react";
import AddDogForm from "./AddDogForm";
import EditDogForm from "./EditDogForm";
import PropTypes from "prop-types";
import Login from "./Login";
import firebase from "firebase";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  static propTypes = {
    dog: PropTypes.object,
    updateDog: PropTypes.func,
    deleteDog: PropTypes.func,
    loadSampleDogs: PropTypes.func,
    addDog: PropTypes.func
  };
  state = {
    uid: null,
    owner: null
  };
  componentDidMount() {
    //Everytime we load the page, firebase will se if we are logged in
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }
  authHandler = async authData => {
    //Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    //Claim it if there is no owner
    if (!store.owner) {
      //save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //Set the state og the inventory coponent to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };
  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };
  logout = async () => {
    console.log("logging out");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };
  render() {
    const logout = <button onClick={this.logout}>Logout</button>;
    //Check if they are logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    //Check if they are not the owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you are not the owner{logout}</p>
        </div>
      );
    }
    //They must be the owner, render the inventory
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logout}
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
