import React from 'react';
import $ from 'jquery';

const API_ENDPOINT = 'http://52.74.88.30';

export default React.createClass({
	getInitialState() {
		return {
			product: {},
			quantity: 1
		}
	},

	componentDidMount() {
		this.loadProduct(this.props.params.id);
	},

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-6">
						<img className="img-responsive" src={this.state.product.cover_image}/>
					</div>
					<div className="col-md-6">
						<h2>{this.state.product.name}</h2>
						<h4>฿ {this.state.product.price}</h4>
						<div dangerouslySetInnerHTML={this.rawMarkup()}></div>
						<div className="form-inline">
							<input type="number" className="form-control" value={this.state.quantity} onChange={this.onQuantityChange}/>
							<button className="btn" onClick={this.addToCart}>Buy</button>
						</div>
					</div>
				</div>
			</div>
		)
	},

	rawMarkup: function() {
		return { __html: this.state.product.detail };
	},

	loadProduct(productId) {
		let that = this;

		$.get(API_ENDPOINT + '/product/' + productId, function(data) {
			that.setState({
				product: data
			});
		});
	},

	onQuantityChange(e) {
		this.setState({
			quantity: Number(e.target.value)
		});
	},

	addToCart() {
    	const product = this.state.product;

		const cartItem = {
			product_code: product.id,
			product_name: product.name,
			product_image: product.cover_image,
			price: product.price,
			quantity: 1,
			total: product.price
		};

		this.addItemToCart(cartItem);
    },

	getCartItems() {
    	return JSON.parse(localStorage.getItem('cart')) || [];
	},

	addItemToCart(item) {
    	let cartItems = this.getCartItems();
    	let matchItem = cartItems.filter(function(cartItem) {
    		return cartItem.product_code === item.product_code;
    	})[0];

    	if(matchItem) {
    		matchItem.quantity += item.quantity;
    		matchItem.total = matchItem.price * matchItem.quantity;
    	} else {
    		cartItems.push(item);    		
    	}


    	localStorage.setItem('cart', JSON.stringify(cartItems));
	}
});