export const reLoading = (state = false, action) => {
  switch (action.type) {
    case "LOADING":
      return action.payload;
    default:
      return state;
  }
};

export const acLoading = (payload) => {
  return {
    type: "LOADING",
    payload: payload,
  };
};
