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
