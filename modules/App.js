import React from 'react';
import { Link } from 'react-router';
import ProductItem from '../components/ProductItem';

export default React.createClass({

	getInitialState() {

		return {
				categories: [],
				products: []
		};

	},

	componentDidMount() {
	    this.loadCategoriesFromServer_(); 
	    this.loadProductsFromServer_();
	},

	onCategoryChanged() {
		this.loadProductsFromServer_();
	},

	render() {
		var categoryOptions = this.state.categories.map((category) => {
			return (<option value={category.id} key={category.id}>{category.name}</option>);
		});

		var productItems = this.state.products.map((product) => {
			return (
				<ProductItem product={product} />
			);
		});

		return (
			<div className="container">
				<header>
					<nav className="navbar">
						<div className="navbar-header">
									<span className="navbar-brand" href="#">e-Commerce</span>
						</div>
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="/">Cart <span className="badge">4</span></Link></li>
						</ul>
					</nav>
				</header>
				<section id="content">

					<nav>
						<div className="row">
							<div className="col-sm-4">
								<div className="form-inline form-group">
									<label>Category</label> 
									<select className="form-control" onChange={this.onCategoryChanged}>
										<option>All</option>
										{categoryOptions}
									</select>
								</div>
							</div>
						</div>
					</nav>

					<div className="row">
						{productItems}
					</div>

				</section>
			</div>
		)
	},

	loadCategoriesFromServer_() {
		var that = this;

		setTimeout(function() {
			console.log('Category loaded');
			that.setState({
				'categories': [{
					"_id": "56f9f3ccedf1cc6036172463",
					"id": 1,
					"name": "Mobiles & Tablets",
					"__v": 0,
					"modified": "2016-03-29T03:17:32.604Z",
					"created": "2016-03-29T03:17:32.604Z"
				}, {
					"_id": "56f9f3dcedf1cc6036172464",
					"id": 2,
					"name": "Accessories",
					"__v": 0,
					"modified": "2016-03-29T03:17:48.727Z",
					"created": "2016-03-29T03:17:48.727Z"
				}]
			});
		}, 300);

	},

	loadProductsFromServer_() {
		var that = this;

		setTimeout(function() {
			console.log('Product loaded');
			that.setState({
				'products': [{ "_id": "56f9f7f8edf1cc6036172465", "cover_image": "http://52.77.58.130/image/apple_watch.jpg", "price": 24500, "id": 1, "name": "Apple Watch", "detail": "Stainless steel or space black stainless steel case", "category_id": 2, "__v": 0, "modified": "2016-03-29T03:35:20.230Z", "created": "2016-03-29T03:35:20.230Z" }, { "_id": "56f9fa83edf1cc6036172466", "cover_image": "http://52.77.58.130/image/ipad_pro.jpg", "price": 22000, "id": 2, "name": "iPad Pro", "detail": "9.7-inch (diagonal) LED-backlit Multi-Touch display", "category_id": 1, "__v": 0, "modified": "2016-03-29T03:46:11.413Z", "created": "2016-03-29T03:46:11.413Z" }, { "_id": "56f9fbfeedf1cc6036172467", "cover_image": "http://52.77.58.130/image/iphone_6s.jpg", "price": 26500, "id": 3, "name": "iPhone 6S", "detail": "<p>Retina HD display with 3D Touch</p>\n<p>4.7-inch (diagonal) LED-backlit widescreen</p>", "category_id": 1, "__v": 0, "modified": "2016-03-29T03:52:30.691Z", "created": "2016-03-29T03:52:30.691Z" }]
			});
		}, 300);
	}
});
