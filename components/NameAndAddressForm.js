import React from 'react';

export default React.createClass({
	getInitialState() {
	    return {
	        firstName: '',
	        lastName: '',
	        email: '',
	        address: '',
	        city: '',
	        province: '',
	        zipcode: '',  
	    };
	},

	componentDidUpdate() {
		this.updateDataChange();
	},

	render() {
		return (			
			<from>
				<legend>Name & Address</legend>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<label>First Name</label>
							<input type="text" className="form-control" value={this.state.firstName} onChange={this.onFirstNameChange}/>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="form-group">
							<label>Last Name</label>
							<input type="text" className="form-control" value={this.state.lastName} onChange={this.onLastNameChange}/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" value={this.state.email} onChange={this.onEmailChange}/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="form-group">
							<label>Address</label>
							<input type="text" className="form-control" value={this.state.address} onChange={this.onAddressChange}/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<label>City</label>
							<input type="text" className="form-control" value={this.state.city} onChange={this.onCityChange}/>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="form-group">
							<label>Province</label>
							<input type="text" className="form-control" value={this.state.province} onChange={this.onProvince}/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6">
						<div className="form-group">
							<label>Zip Code</label>
							<input type="text" className="form-control" value={this.state.zipcode} onChange={this.onZipCodeChange}/>
						</div>
					</div>
				</div>
			</from>
		);
	},

	onFirstNameChange(e) {
		this.setState({
			firstName: e.target.value
		});
	},

	onLastNameChange(e) {
		this.setState({
			lastName: e.target.value
		});
	},

	onEmailChange(e) {
		this.setState({
			email: e.target.value
		});
	},

	onAddressChange(e) {
		this.setState({
			address: e.target.value
		});
	},

	onCityChange(e) {
		this.setState({
			city: e.target.value
		});
	},

	onProvince(e) {
		this.setState({
			province: e.target.value
		});
	},

	onZipCodeChange(e) {
		this.setState({
			zipcode: e.target.value
		});
	},

	updateDataChange() {
		const customerInfo = {
			customer_name: `${this.state.firstName} ${this.state.lastName}`,
		    customer_email: this.state.email,
		    customer_address: `${this.state.address} ${this.state.city} ${this.state.province} ${this.state.zipcode}`,
		};

		this.props.onDataChange(customerInfo);
	}
});