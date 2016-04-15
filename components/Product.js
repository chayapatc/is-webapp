import React from 'react';

export default React.createClass({
	render() {
		var className = 'thumbnail ' + this.props.className;
		return (
			<div className={className}>
				<img src={this.props.product.cover_image} className="img-responsive"/>
				<div className="caption">
					<h3 className="product-name">{this.props.product.name}</h3>
					<div className="pull-left product-price">฿ {this.props.product.price}</div>
					<div className="pull-right">
						<button className="btn" onClick={this.addToCart}>Buy</button>									
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		)
	},

	addToCart() {
		this.props.onAddToCart(this.props.product.id);
	}
})