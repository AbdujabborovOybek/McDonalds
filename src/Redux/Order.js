const order = JSON.parse(localStorage.getItem("order") || "[]");

console.log(order);

// create reduser for add item to order
export const reOrder = (state = order, action) => {
  switch (action.type) {
    case "ADD_TO_ORDER":
      return [...state, action.payload];
    case "REMOVE_FROM_ORDER":
      return state.filter((item) => item.time !== action.payload);
    default:
      return state;
  }
};

export const acAddToOrder = (payload) => ({
  type: "ADD_TO_ORDER",
  payload,
});

export const acRemoveFromOrder = (time) => ({
  type: "REMOVE_FROM_ORDER",
  payload: time,
});
