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
  query($limit: Float!, $page: Float!) {
    products(limit: $limit, page: $page) {
      totalQty
      products {
        _id
        title
        image
        brand
        description
        price
      }
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
      total
    }
  }
`;

export const ORDERS = gql`
  query {
    adminOrders {
      total
      items {
        id
        orderNumber
        grandTotal
        totalQty
        orderStatus
        customer {
          firstname
          email
        }
      }
    }
  }
`;

export const ORDER = gql`
  query($orderId: ID) {
    adminOrder(orderId: $orderId) {
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
      items {
        id
        productId {
          _id
          title
          image
          brand
          price
        }
        name
        quantity
        price
        total
      }
    }
  }
`;
