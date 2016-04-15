import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		const className = 'product-item ' + this.props.className;

		return (
			<div className={className}>
				<Link to={`/product/${this.props.product.id}`}><img src={this.props.product.cover_image} className="image"/></Link>
				<div className="product-caption">
					<h4 className="name"><Link to={`/product/${this.props.product.id}`}>{this.props.product.name}</Link></h4>
					<button className="pull-right btn btn-primary" onClick={this.addToCart}>Add to cart</button>
					<h4 className="price">฿ {this.props.product.price}</h4>
					<div className="clearfix"></div>
				</div>
			</div>
		);
	},

	addToCart() {
		this.props.onAddToCart(this.props.product.id);
	}
})