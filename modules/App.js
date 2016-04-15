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
				<nav className="navbar">
					<div className="brand"><Link to="/">Home</Link></div>
					<ul>
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