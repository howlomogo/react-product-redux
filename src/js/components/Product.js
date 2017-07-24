import React, { Component } from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {cartHandler} from './../actions/action-cart-handler';


class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {
			productQuantity: this.props.product.quantity
		}
	}

	setQuantity(value){
        this.setState({
             productQuantity: value
        });
        console.log(this.state.productQuantity);
    }

	render() {
		return (
			<div className="product--container" key={this.props.product.id}>
				<h5> {this.props.product.name}</h5>
				<h6 className="mb-3"> ({this.props.product.cat})</h6>				

				<h5 className="mb-3"> &pound;{this.props.product.price}</h5>
				<h6> In Stock: {this.props.product.stocked.toString()}</h6>

				<button className="btn btn-primary" onClick={() =>this.props.cartHandler(this.props.product)}>ADD TO CART</button>

			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		products: state.products
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({cartHandler: cartHandler}, dispatch)
}

// Props and Action
export default connect(mapStateToProps, matchDispatchToProps)(Product);