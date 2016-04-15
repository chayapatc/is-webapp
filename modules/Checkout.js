import React from 'react';
import { browserHistory } from 'react-router';
import NameAndAddressForm from '../components/NameAndAddressForm';

export default React.createClass({
	getInitialState() {
	    return {
	        cartItems: []  
	    };
	},

	componentDidMount() {
	    this.setState({
	    	cartItems: this.getCartItems()
	    });
	},

	render() {

		const total = this.state.cartItems.reduce(function(total, product) {
			return total + (product.price * product.quantity);
		}, 0);

		return (
			<div>
				<h2>Checkout</h2>
				<NameAndAddressForm/>
				<div>
					<h4>Grand Total <span>฿{total}</span></h4>
					<button className="btn btn-block" onClick={this.placeOrder}>Place Order Now</button>
				</div>
			</div>
		)
	},

	placeOrder() {
		const orderNo = '100000004';
		const path = '/checkout/complete/' + orderNo;
		browserHistory.push(path);
	},

	getCartItems() {
    	return JSON.parse(localStorage.getItem('cart')) || [];
	}
});