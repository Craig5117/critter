const { gql } = require('apollo-server-express');

// const typeDefs = gql `
// type PET
// _id
// username
// email
// petType 
// image 
// age 
// sex 
// bio 
// humanStatus 
// posts 
// friends
// friendCount 

// type POST
// _id
// postText 
// createdAt 
// petUsername 
// comments
// commentCount

// type COMMENT
// _id
// commentText
// createdAt
// petUsername 

// type Auth
// token
// pet

// type Query {
// me: Pet
// pets: [Pet]
// pet(petUsername: String!): Pet
// posts(petUsername: String): [Post]
// post(_id: ID!): Post
// }

// type Mutation
// login
// addPet
// addPost
// addComment
// addFriend
// addProfileImage(imageUrl: String!): User
// `;
