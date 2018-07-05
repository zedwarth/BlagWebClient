import gql from 'graphql-tag';

export const userQuery = gql`
  query Users {
    users {
      username
      posts {
        id
      }
    }
  }`;

