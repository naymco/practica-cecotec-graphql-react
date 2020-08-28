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
) 
}
`;

export const GET_ALL_USERS = gql`
{
  allUsers {
    _id
    firstName
    lastName
  }
}
`;