import { types } from "./type";
import { client } from "../../index";
import { GET_CUSTOMERS } from "../../graphql/queries";

export const getCustomers = () => {
  return async (dispatch) => {
    if (client) {
      const getCustomer = await client.query({
        query: GET_CUSTOMERS,
      });
      console.log(getCustomer, 88);
      dispatch({
        type: types.GET_CUSTOMERS,
        payload: {
          customers: getCustomer,
        },
      });
    }
  };
};
