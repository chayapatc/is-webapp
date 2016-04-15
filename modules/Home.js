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
    	var categoryId = Number(e.target.value);
    	this.loadProducts(categoryId);
    },

    onAddToCart(product) {
    	product.quantity = 1;
    	
    	let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    	cartItems.push(product);

    	localStorage.setItem('cart', JSON.stringify(cartItems));
    }
});
