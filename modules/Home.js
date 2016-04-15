import React from 'react';
import CategoryMenu from '../components/CategoryMenu';
import ProductList from '../components/ProductList';
import $ from 'jquery';

const API_ENDPOINT = 'http://52.77.58.130';

export default React.createClass({
	getInitialState() {
		return {
			categories: [],
			products: []
		}
	},

	componentDidMount() {
		this.loadCategories();
		this.loadProducts();
	},

    render() {
        return ( 
        	<div>
	            <CategoryMenu categories={ this.state.categories } onCategorySelect={ this.onCategorySelect }/> 
	            <ProductList products={ this.state.products } onAddToCart={ this.onAddToCart }/>
            </div>
        )
    },

    loadCategories() {
    	let that = this;

    	$.get(API_ENDPOINT + '/category', function(data) {
    		that.setState({categories: data});
    	});
    },

    loadProducts(categoryId) {
    	let that = this;

    	if(isNaN(categoryId)) {
    		categoryId = null;
    	}

    	$.get(API_ENDPOINT + '/product', {category_id: categoryId}, function(data) {
    		that.setState({products: data});
    	});
    },

    onCategorySelect(e) {
    	const categoryId = Number(e.target.value);
    	this.loadProducts(categoryId);
    },

    onAddToCart(productId) {
    	const product = this.state.products.filter(function(product) {
    		return product.id === productId;
    	})[0];

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
