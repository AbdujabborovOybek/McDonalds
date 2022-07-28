export const reTypeProduct = (state = "mc_beverages", action) => {
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
