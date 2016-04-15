import React from 'react'

export default React.createClass({
	render() {
		var options = this.props.categories.map(function(category) {
			return <option value={category.id} key={category.id}>{category.name}</option>;
		})

		return (
			<div className="form-inline form-group">
				<select className="form-control" onChange={this.props.onCategorySelect}>
					<option>All Categories</option>
					{options}
				</select>
			</div>
		)
	}
})