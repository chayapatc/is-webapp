import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/cart">Cart</Link></li>
						<li><Link to="/checkout">Checkout</Link></li>
					</ul>
				</nav>
				{this.props.children}
			</div>
		)
	}
});