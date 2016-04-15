import React from 'react'

export default React.createClass({
	render() {
		var options = this.props.categories.map(function(category) {
			return <option value={category.id} key={category.id}>{category.name}</option>;
		})

		return (
			<div className="form-inline form-group">
				<label>Category</label>
				<select className="form-control" onChange={this.props.onCategorySelect}>
					<option>All</option>
					{options}
				</select>
			</div>
		)
	}
})