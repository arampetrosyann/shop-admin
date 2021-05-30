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
  mutation($productInput: ProductInput!) {
    adminCreateProduct(productInput: $productInput) {
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

export const UPDATE_PRODUCT = gql`
  mutation($productId: ID!, $productInput: ProductInput) {
    adminUpdateProduct(
      productId: $productId
      productInput: $productInput
    ) {
      _id
    }
  }
`;

export const ADD_CATEGORY = gql`
  mutation($categoryData: CategoryInputData!) {
    adminAddCategory(categoryData: $categoryData)
  }
`;

export const DELETE_CATEGORY = gql`
  mutation($categoryId: ID!) {
    adminDeleteCategory(categoryId: $categoryId)
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation($categoryId: ID!, $categoryData: CategoryInputData!) {
    adminUpdateCategory(
      categoryId: $categoryId
      categoryData: $categoryData
    )
  }
`;

export const DELETE_ORDER = gql`
  mutation($orderId: ID) {
    adminDeleteOrder(orderId: $orderId)
  }
`;

export const DELETE_MASS_ORDERS = gql`
  mutation($orderIds: [ID]!) {
    adminMassDeleteOrders(orderIds: $orderIds)
  }
`;

export const CHANGE_ORDER_STATUS = gql`
  mutation($orderId: ID!, $status: String) {
    adminChangeOrderStatus(orderId: $orderId, status: $status) {
      id
      orderNumber
      createdAt
      shippingTotal
      subTotal
      grandTotal
      totalQty
      orderStatus
      customer {
        firstname
        lastname
        email
      }
    }
  }
`;
