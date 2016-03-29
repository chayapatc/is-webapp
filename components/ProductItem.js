import React from 'react'

export default React.createClass({
  render() {
  	var product = this.props.product;

    return (
    	<div className="col-sm-4">
			<div className="thumbnail">
				<img src={product.cover_image} className="img-responsive" />
				<div className="caption">
					<h3 className="product-name">{product.name}</h3>
					<div className="pull-left product-price">฿ {product.price}</div>
					<div className="pull-right">
						<button className="btn">Buy</button>									
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
    )
  }
})