import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCyw7fgZxvCwPwtUPxIjkRnLx8fZYttz0w',
	authDomain: 'adobt-me-playground.firebaseapp.com',
	databaseURL: 'https://adobt-me-playground.firebaseio.com'
});
const base = Rebase.createClass(firebaseApp.database());

//this is a named export:
export { firebaseApp };

//this is a default export
export default base;
