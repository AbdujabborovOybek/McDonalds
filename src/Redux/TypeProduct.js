export const reTypeProduct = (state = "Desserts & Shakes", action) => {
  switch (action.type) {
    case "SET_TYPE_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export const acTypeProduct = (type) => ({
  type: "SET_TYPE_PRODUCT",
  payload: type,
});
