import { types } from "./type";

const initialState = {
  customers: null,
};
const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload.customers,
      };
    default:
      return state;
  }
};

export default customersReducer;