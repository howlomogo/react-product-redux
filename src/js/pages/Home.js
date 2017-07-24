import React, { Component } from 'react';
import {connect} from 'react-redux';

import Product from './../components/Product';



class Home extends Component {
	render() {

		return (
			<div className="text-center">

				<h3>Home</h3>
				<hr />

				{
					this.props.products.map( product =>
						<Product
							key={product.id}
							product={product}
						/>
					)
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps)(Home);