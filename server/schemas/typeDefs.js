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
// relationshipStatus 
// tails 
// friends
// friendCount 

// type tail
// _id
// tailText 
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
// tails(petUsername: String): [Tail]
// tail(_id: ID!): Tail
// }

// type Mutation
// login
// addPet
// addTail
// addComment
// addFriend
// addProfileImage(imageUrl: String!): User
// `;
