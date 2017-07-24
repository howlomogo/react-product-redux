import React, { Component } from 'react';
import './App.css';

import ProductList from './../containers/product-list';
import ProductDetail from './../containers/product-detail';

import Header from './Header';
import Home from './../pages/Home';


class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<Home />
			</div>
		)
	}
}


export default App;