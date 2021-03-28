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
  query tails($postedBy: ID) {
      tails(postedBy: $postedBy) {
      _id
      tailText
      createdAt
      postedBy {
        _id
        username
        image
      }
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
      postedBy {
        _id
        username
        image
      }
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
  query pet($_id: ID!) {
    pet(_id: $_id) {
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

export const QUERY_PET_TYPES = gql`
    query {
    petTypes {
      _id
      name
    }
  }
`;