import React from 'react';

export default React.createClass({
	getInitialState() {
		return {
			quantity: 1
		}
	},

	componentDidMount() {
		this.setState({
			quantity: this.props.product.quantity
		})
	},

	render() {
		return (
			<tr className="cart-item-row">
				<td width="20%"><img className="img-responsive" src={this.props.product.product_image}/></td>
				<td><h4>{this.props.product.product_name}</h4></td>
				<td>{this.props.product.price}</td>
				<td><input type="number" className="form-control quantity-input" value={this.state.quantity} onChange={this.onQuantityChange}/></td>
				<td><button className="btn btn-default">Delete</button></td>
			</tr>
		)
	},

	onQuantityChange(e) {
		this.setState({
			quantity: Number(e.target.value)
		})
	}
});