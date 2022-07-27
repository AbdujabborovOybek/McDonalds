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

    case "DELETE_FROM_CART":
      return state.filter((product) => product.id !== action.payload);

    case "INC_PRODUCT_IN_CART":
      state.filter((product) => {
        if (product.id === action.payload) {
          product.quantity >= 15
            ? (product.quantity = 15)
            : (product.quantity += 1);
          return product;
        }
        return product;
      });
      return [...state];

    case "DEC_PRODUCT_IN_CART":
      state.filter((product) => {
        if (product.id === action.payload) {
          product.quantity <= 1
            ? (product.quantity = 1)
            : (product.quantity -= 1);
          return product;
        }
        return product;
      });
      return [...state];

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export const acAddProductToCart = (product) => ({
  type: "ADD_PRODUCT_TO_CART",
  payload: product,
});

export const acDeleteFromCart = (id) => ({
  type: "DELETE_FROM_CART",
  payload: id,
});

export const acIncProductInCard = (id) => ({
  type: "INC_PRODUCT_IN_CART",
  payload: id,
});

export const acDecProductInCard = (id) => ({
  type: "DEC_PRODUCT_IN_CART",
  payload: id,
});

export const acClearCart = () => ({
  type: "CLEAR_CART",
});
