export default function (state=null, action) {
	switch(action.type) {
		case "CART_HANDLER":
		console.log("Clicked on the cart handler");
		return action.payload;
		break;
	}
	return state;
}