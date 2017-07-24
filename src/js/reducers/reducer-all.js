import {combineReducers} from 'redux';
import ProductReducer from './reducer-products';
import ActiveProductReducer from './reducer-active-product';

const allReducers = combineReducers({
	products: ProductReducer,
	activeProduct: ActiveProductReducer
});

export default allReducers;