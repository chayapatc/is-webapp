import React from 'react';
import Product from './Product';

export default React.createClass({
	render() {
		let that = this;

		const products = this.props.products.map(function(product) {
			return <Product className="col-md-3" key={product.id} product={product} onAddToCart={that.props.onAddToCart}/>
		});

		return (
			<div className="products row">
				{products}
			</div>
		)
	}
})