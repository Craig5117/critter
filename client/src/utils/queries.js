import gql from 'graphql-tag';

export const QUERY_TAILS = gql`
query tails($username: String) {
    tails(username: $username) {
      _id
      tailText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }
`;

export const QUERY_TAIL = gql`
    query tail($id: ID!) {
    tail(_id: $id) {
      _id
      tailText
      createdAt
      username
      commentCount
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }
`;

export const QUERY_PETS = gql`
`