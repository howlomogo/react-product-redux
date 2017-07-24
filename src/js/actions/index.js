export const selectProduct = (product) => {
	console.log("You clicked: ", product.name);
	return {
		type: "PRODUCT_SELECTED",
		payload: product
	}
};