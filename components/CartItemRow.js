import React from 'react';

export default React.createClass({
	render() {
		return (
			<tr>
				<td width="20%"><img className="img-responsive" src={this.props.product.product_image}/></td>
				<td>{this.props.product.product_name}</td>
				<td>{this.props.product.price}</td>
				<td>{this.props.product.quantity}</td>
				<td></td>
			</tr>
		)
	}
});