import React from 'react';

export default React.createClass({
	render() {
		return (
			<tr>
				<td width="20%"><img className="img-responsive" src={this.props.product.cover_image}/></td>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.price}</td>
				<td>{this.props.product.quantity}</td>
				<td></td>
			</tr>
		)
	}
});