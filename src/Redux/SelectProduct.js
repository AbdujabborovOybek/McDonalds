export const reSelectProduct = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export const acSelectProduct = (payload) => {
  return {
    type: "SELECT_PRODUCT",
    payload,
  };
};
