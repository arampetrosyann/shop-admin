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

export const PRODUCTS = gql`
  query Products {
    products {
      _id
      title
      image
      brand
      description
      price
    }
  }
`;

export const CATEGORIES = gql`
  query {
    adminGetCategories {
      items {
        id
        title
        parent
      }
    }
  }
`;
