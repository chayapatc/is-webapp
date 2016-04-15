import React from 'react';
import CartItemRow from '../components/CartItemRow';
import { Link } from 'react-router';

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
		const productList = this.state.cartItems.map(function(product) {
			return <CartItemRow product={product} key={product.product_code}/>
		});

		const total = this.state.cartItems.reduce(function(total, product) {
			return total + (product.price * product.quantity);
		}, 0);

		return (
			<div>
				<h2>Shopping Cart</h2>
				<table className="table">
					<thead>
						<tr>
							<th>Image</th>
							<th>Product Name</th>
							<th>Price</th>
							<th>Qty.</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{productList}
					</tbody>
				</table>
				<table className="table">
					<colgroup>
						<col/>
						<col width="1"/>
					</colgroup>
					<tbody>
						<tr>
							<td className="text-right">Sub Total</td>
							<td className="text-right">{total}</td>
						</tr>
						<tr>
							<td className="text-right"><h3>Grand Total</h3></td>
							<td className="text-right"><h3>{total}</h3></td>
						</tr>
						<tr>
							<td></td>
							<td>
								<Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	},

	getCartItems() {
    	return JSON.parse(localStorage.getItem('cart')) || [];
	}
});