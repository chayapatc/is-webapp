import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		const className = 'thumbnail ' + this.props.className;

		return (
			<div className={className}>
				<Link to={`/product/${this.props.product.id}`}><img src={this.props.product.cover_image} className="img-responsive"/></Link>
				<div className="caption">
					<h3 className="product-name">{this.props.product.name}</h3>
					<div className="pull-left product-price">฿ {this.props.product.price}</div>
					<div className="pull-right">
						<button className="btn" onClick={this.addToCart}>Buy</button>									
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		);
	},

	addToCart() {
		this.props.onAddToCart(this.props.product.id);
	}
})