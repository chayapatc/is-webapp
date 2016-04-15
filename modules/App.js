import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	getInitialState() {
		return {
			cartItems: []
		}
	},

	componentDidMount() {
		let that = this;
		setInterval(function() {
			that.setState({
				cartItems: that.getCartItems()
			})
		}, 400);
	},

	render() {
		return (
			<div className="container">
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/cart">Cart <span className="badge">{this.state.cartItems.length}</span></Link></li>
					</ul>
				</nav>
				{this.props.children}
			</div>
		)
	},

	getCartItems() {
    	return JSON.parse(localStorage.getItem('cart')) || [];
	}
});