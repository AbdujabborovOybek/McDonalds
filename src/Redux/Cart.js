const cart = JSON.parse(localStorage.getItem("cart") || "[]");

export const reAddProductToCart = (state = cart, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      let found = false;
      state.filter((product) => {
        if (product.id === action.payload.id) {
          found = true;
          product.quantity += action.payload.quantity;
          return product;
        }
        return product;
      });
      if (!found) {
        return [...state, action.payload];
      }
      return [...state];
    default:
      return state;
  }
};

export const acAddProductToCart = (product) => ({
  type: "ADD_PRODUCT_TO_CART",
  payload: product,
});
