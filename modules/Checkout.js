import React from 'react';
import { browserHistory } from 'react-router';
import NameAndAddressForm from '../components/NameAndAddressForm';
import $ from 'jquery';

const API_ENDPOINT = 'http://52.74.88.30';

export default React.createClass({
	getInitialState() {
	    return {
	    	customerInfo: {},
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
				<NameAndAddressForm onDataChange={this.onDataChange}/>
				<div>
					<h4>Grand Total <span>฿{total}</span></h4>
					<button className="btn btn-primary btn-block" onClick={this.placeOrder}>Place Order Now</button>
				</div>
			</div>
		)
	},

	onDataChange(data) {
		if(!this.isEqual(this.state.customerInfo, data)) {
			this.setState({
				customerInfo: data
			});
		}
	},

	isEqual(object1, object2) {
		for(let key in object1) {
			if(object1[key] !== object2[key]) {
				return false;
			}
		}

		return true;
	},

	placeOrder() {
		let that = this;

		const payload = {
			customer_name: this.state.customerInfo.customer_name,
		    customer_email: this.state.customerInfo.customer_email,
		    customer_address: this.state.customerInfo.customer_address,
		    items: this.state.cartItems
		};

		$.post(API_ENDPOINT + '/order', payload, function(data) {
			that.clearCartItems();
			that.redirectToCompletePage();
		});
	},

	getCartItems() {
    	return JSON.parse(localStorage.getItem('cart')) || [];
	},

	clearCartItems() {
		localStorage.setItem('cart', JSON.stringify([]));
	},

	redirectToCompletePage() {
		const orderNo = '100000004';
		const path = '/checkout/complete/' + orderNo;
		browserHistory.push(path);		
	}
});