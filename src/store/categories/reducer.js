export default (
  state = {
    items: [],
    total: 0,
    isDataFetched: false,
  },
  action
) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
