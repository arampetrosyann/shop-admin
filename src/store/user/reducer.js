export default (
  state = {
    firstName: "",
    lastName: "",
    signedIn: false,
    isDataFetched: false,
  },
  action
) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
