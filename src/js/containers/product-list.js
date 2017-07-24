import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectProduct} from './../actions/index';

class ProductList extends Component {

	createProductList() {
		return this.props.products.map((product) => {
			return (
				<li key={product.id}
					onClick={() => this.props.selectProduct(product)}
				>
					{product.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul>
				{this.createProductList()}
			</ul>
		);
	}
}

function mapStateToProps (state) {
	return {
		products: state.products
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({selectProduct: selectProduct}, dispatch)
}

// Props and Action
export default connect(mapStateToProps, matchDispatchToProps)(ProductList);