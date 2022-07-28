const user = JSON.parse(localStorage.getItem("user") || "{}");

export const reUser = (state = user, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    default:
      return state;
  }
};

export const acUser = (user) => ({
  type: "SET_USER",
  payload: user,
});
