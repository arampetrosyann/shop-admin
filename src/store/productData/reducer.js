import { types } from "./type";

const initialState = {
  productData: null,
};
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload.productData,
      };
    default:
      return state;
  }
};

export default dataReducer;
