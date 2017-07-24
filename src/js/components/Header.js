import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {

	getCartAmount() {
		let totalProducts = 0;

		for(var i = 0; i < this.props.cartItems.length; i++) {
			totalProducts++;
			console.log(totalProducts);
		}
		return totalProducts;
	}

	render() {
		return (
			<div>
				<div className="navigation">
					<div><a href="/">Home</a></div>
					<div><a href="/account">Account</a></div>
					<div>Items In Cart: {this.getCartAmount()}</div>
				</div>
				<hr/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products,
		cartItems: state.cartItems
	}
}

export default connect(mapStateToProps)(Header);