import gql from 'graphql-tag';

export const LOGIN_PET = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      pet {
        _id
      }
    }
  }
`;

export const ADD_PET = gql`
  mutation addPet(
    $username: String!
    $password: String!
    $email: String!
    $petType: String!
    $age: String
    $sex: String!
    $bio: String!
    $relationshipStatus: String
  ) {
    addPet(
      username: $username
      password: $password
      email: $email
      petType: $petType
      age: $age
      sex: $sex
      bio: $bio
      relationshipStatus: $relationshipStatus
    ) {
      token
      pet {
        _id
        username
        email
        petType
        age
        sex
        bio
        relationshipStatus
      }
    }
  }
`;

export const ADD_TAIL = gql`
  mutation addTail($tailText: String!) {
    addTail(tailText: $tailText) {
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
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($tailId: ID!, $commentText: String!) {
    addComment(tailId: $tailId, commentText: $commentText) {
      _id
      commentCount
      comments {
        _id
        commentText
        createdAt
        username
      }
    }
  }
`;

export const ADD_PROFILE_IMAGE = gql`
  mutation addProfileImage($imageURL: String!) {
    addProfileImage(imageURL: $imageURL) {
      _id
      username
      email
      petType
      age
      sex
      image
      bio
      relationshipStatus
    }
  }
`;
