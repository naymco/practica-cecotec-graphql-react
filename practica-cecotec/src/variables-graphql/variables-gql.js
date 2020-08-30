import { gql } from "@apollo/client";


export const REGISTER_NEW_USER = gql`

  mutation($email: String!, $firstName: String!, $lastName: String!, $avatar: String, $password: String!)
  {
  createUser(
    avatar: $avatar
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
  ) {
      info {
       _id avatar firstName lastName email
      }
        success
        errors{
          path
          message
        }
    }

  }
`;

export const CREATE_NEW_PRODUCT = gql`

  mutation($productName: String!, $description: String!, $image: String, $price: String! )
  {
    createProduct(
      productName: $productName
      description: $description
      image: $image
      price: $price
    ){
      _id
      productName
      description
      image
      price
    }
  }

`;

export const LOGIN_WITH_TOKEN = gql `
  mutation($email: String!, $password: String!){
   login(
     email: $email
     password: $password
   ){
    success
    token
    errors{
      path
      message
    }
   }
  }

`;

export const GET_ALL_USERS = gql`
  {
    allUsers {
      _id
      avatar
      firstName
      lastName
      email
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  {
    allProducts {
      _id
      image
      productName
      description
      price
    }
  }
`;

