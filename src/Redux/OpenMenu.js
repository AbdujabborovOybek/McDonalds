export const reOpenMenu = (state = false, action) => {
  switch (action.type) {
    case "RE_OPEN_MENU":
      return action.payload;
    default:
      return state;
  }
};

export const acOpenMenu = (boolen) => {
  return {
    type: "RE_OPEN_MENU",
    payload: boolen,
  };
};
