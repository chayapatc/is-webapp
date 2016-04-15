import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div>
				<h2>Your order has been received.</h2>
				<h5>Thank you for your purchase.</h5>
				<p>Your order # is: {this.props.params.orderNo}.</p>
				<p>You will receive an order confirmation email with details of your order and a link to track its progress.</p>
				<div className="pull-right">
					<Link to="/" className="btn btn-primary">Continue Shopping</Link>
				</div>
			</div>
		)
	}
});