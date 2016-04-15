import React from 'react';

export default React.createClass({
	render() {
		return (			
			<from>
				<legend>Name & Address</legend>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<label>First Name</label>
							<input type="text" className="form-control"/>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="form-group">
							<label>Last Name</label>
							<input type="text" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<label>City</label>
							<input type="text" className="form-control"/>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="form-group">
							<label>Province</label>
							<input type="text" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<label>Zip Code</label>
							<input type="text" className="form-control"/>
						</div>
					</div>
				</div>
			</from>
		);
	}
});