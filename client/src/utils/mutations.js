import { gql } from '@apollo/client';

// Mutation to login a user
export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          _id
          title
          author
          description
          image
          link
        }
      }
    }
  }
`;

// Mutation to create a new user
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          _id
          title
          author
          description
          image
          link
        }
      }
    }
  }
`;

// Mutation to save a book to a user's account
export const SAVE_BOOK = gql`
  mutation SaveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        _id
        title
        author
        description
        image
        link
      }
    }
  }
`;

// Mutation to remove a book from a user's account
export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        _id
        title
        author
        description
        image
        link
      }
    }
  }
`;
