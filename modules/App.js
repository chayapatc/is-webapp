import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	getInitialState() {
		return {
			cartItems: [],
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
			<div>
				<header className="header">	
					<div className="container">
						<div className="brand"><Link to="/">e-Commerce</Link></div>
						<ul className="right-menu">
							<li>
								<Link to="/cart">
									<span className="cart-icon glyphicon glyphicon-shopping-cart pull-left" aria-hidden="true"></span>
									<div className="pull-left">
										<div className="cart-item">Cart Item: <span className="highlight">({this.state.cartItems.length})</span></div>
										<div className="cart-item">Total: <span className="highlight">฿{this.getTotal()}</span></div>
									</div>
								</Link>
							</li>
						</ul>
						<div className="clearfix"></div>
					</div>
				</header>
				<div className="content">
					<div className="container">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	},

	getCartItems() {
    	return JSON.parse(localStorage.getItem('cart')) || [];
	},

	getTotal() {
		return this.state.cartItems.reduce(function(total, item) {
			return total + (item.price * item.quantity);
		}, 0);
	}
});