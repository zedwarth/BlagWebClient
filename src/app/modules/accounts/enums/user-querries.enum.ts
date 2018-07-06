import gql from 'graphql-tag';

export const userQuery = gql`
  {
    users {
      id
      username
      posts {
        id
      }
    }
  }`;

