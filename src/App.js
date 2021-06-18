import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop-page';
import Header from './components/header/header';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unSubscribeFromAuth = null;

	componentDidMount() {
		this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}
export default App;
