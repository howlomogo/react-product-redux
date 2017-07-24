export const cartHandler = (product) => {
	return {
		type: "CART_HANDLER",
		payload: product
	}
};