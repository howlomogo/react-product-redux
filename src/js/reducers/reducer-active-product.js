export default function (state=null, action) {
	switch(action.type) {
		case "PRODUCT_SELECTED":
		console.log("Cliked on Active Product");
		return action.payload;
		break;
	}
	return state;
}