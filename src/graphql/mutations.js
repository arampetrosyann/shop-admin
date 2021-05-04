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
