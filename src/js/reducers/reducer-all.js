import {combineReducers} from 'redux';
import ProductReducer from './reducer-products';
import CartItems from './reducer-cart-items';
import ActiveProductReducer from './reducer-active-product';
import CartHandlerReducer from './reducer-cart-handler';


const allReducers = combineReducers({
	products: ProductReducer,
	cartItems: CartItems,
	activeProduct: ActiveProductReducer,
	cartHandler: CartHandlerReducer
});

export default allReducers;