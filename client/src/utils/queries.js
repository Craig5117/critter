import gql from 'graphql-tag';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      petType
      age
      sex
      bio
      image
      relationshipStatus
      friends {
        _id
        username
      }
      tails {
        _id
        tailText
        createdAt
        commentCount
      }
    }
  }
`;

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
  query {
    pets {
      _id
      username
      email
      petType
      age
      sex
      bio
      image
      relationshipStatus
      friends {
        _id
        username
      }
      tails {
        _id
        tailText
        createdAt
        commentCount
      }
    }
  }
`;

export const QUERY_PETS_BASIC = gql`
  query {
    pets {
      _id
      username
      petType
      age
      sex
      bio
      image
      relationshipStatus
    }
  }
`;

export const QUERY_PET = gql`
  query pet($username: String!) {
    pet(username: $username) {
      _id
      username
      email
      petType
      age
      sex
      bio
      image
      relationshipStatus
      friends {
        _id
        username
      }
      tails {
        _id
        tailText
        createdAt
        commentCount
      }
    }
  }
`;
