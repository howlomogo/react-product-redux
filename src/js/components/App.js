import React from 'react';
import ProductList from './../containers/product-list';
import ProductDetail from './../containers/product-detail';

const App = () => (
	<div>
		<h2>Product List</h2>
		<ProductList />
		<hr />
		<h5>Product Details:</h5>
		<ProductDetail />
	</div>
);


export default App;