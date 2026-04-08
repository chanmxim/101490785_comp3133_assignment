import { gql } from 'apollo-angular';

export const LOGIN_USER = gql`
  query Login($usernameOrEmail: String!, $password: String!) {
    login(usernameOrEmail: $usernameOrEmail, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const GET_ALL_EMPLOYEES = gql`
  query GetAllEmployees {
    getAllEmployees {
      id
      first_name
      last_name
      email
      designation
      department
    }
  }
`;

export const SEARCH_EMPLOYEES = gql`
  query Search($designation: String, $department: String) {
    searchEmployeeByDesignationOrDepartment(designation: $designation, department: $department) {
      id
      first_name
      last_name
      email
      designation
      department
    }
  }
`;