import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      firstname
      lastname
      token
    }
  }
`;

export const DELETE_MASS_CUSTOMERS = gql`
  mutation AdminMassDeleteCustomers($customerIds: [String]) {
    adminMassDeleteCustomers(customerIds: $customerIds)
  }
`;

export const DELETE_CUSTOMER = gql`
  mutation DeleteCustomer($id: ID!) {
    adminDeleteCustomer(id: $id)
  }
`;

export const ADD_CUSTOMER = gql`
  mutation(
    $email: String
    $password: String
    $firstname: String
    $lastname: String
  ) {
    adminAddCustomer(
      customerData: {
        email: $email
        password: $password
        firstname: $firstname
        lastname: $lastname
      }
    )
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation($id: ID!, $customerData: CustomerDataInput) {
    adminUpdateCustomer(id: $id, customerData: $customerData)
  }
`;

export const CREATE_PRODUCT = gql`
  mutation(
    $title: String!
    $image: String!
    $brand: String!
    $description: String!
    $price: Float!
    $categories: [ID]!
  ) {
    adminCreateProduct(
      productInput: {
        title: $title
        image: $image
        brand: $brand
        description: $description
        price: $price
        categories: $categories
      }
    ) {
      _id
      title
      image
      brand
      description
      price
      categories {
        title
      }
    }
  }
`;
