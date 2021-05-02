import { types } from "./type";
import { client } from "../../index";
import { GET_PRODUCTS_DATA } from "../../graphql/queries";

export const getProductData = () => {
  return async (dispatch) => {
    if (client) {
      const getProduct = await client.query({
        query: GET_PRODUCTS_DATA,
        variables: { categoryId: "602e537c205367233c805511" },
      });
      dispatch({
        type: types.GET_PRODUCT_DATA,
        payload: {
          productData: getProduct,
        },
      });
    }
  };
};
