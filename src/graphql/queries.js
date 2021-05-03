import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      firstname
      lastname
      email
    }
  }
`;

export const GET_PRODUCTS_DATA = gql`
  query GetProductsData($categoryId: ID!) {
    getCategoryProducts(categoryId: $categoryId) {
      products {
        id
        name
        price
        discountedPrice
        averageRating
        urlKey
        images {
          path
        }
      }
    }
  }
`;
