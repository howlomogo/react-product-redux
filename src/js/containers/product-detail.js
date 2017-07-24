import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductDetail extends Component {
	render() {

		if(!this.props.product) {
			return (
				<h3>Select a product</h3>
			);
		}

		return (
			<div>
				<h3>Product Name: {this.props.product.name}</h3>
				<h6>Product Cat: {this.props.product.cat}</h6>
				<h3>Product Price: {this.props.product.price}</h3>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		product: state.activeProduct
	};
}

export default connect(mapStateToProps)(ProductDetail);