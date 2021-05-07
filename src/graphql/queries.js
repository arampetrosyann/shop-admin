import { gql } from "@apollo/client";

export const GET_ADMIN = gql`
  query {
    admin {
      firstname
      lastname
    }
  }
`;

export const GET_USER = gql`
  query($id: ID!) {
    adminCustomer(id: $id) {
      firstname
      lastname
      email
    }
  }
`;

export const GET_CUSTOMERS = gql`
  query Customer {
    customers {
      id
      firstname
      lastname
      email
      token
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
