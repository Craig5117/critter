const { gql } = require('apollo-server-express');

const typeDefs = gql `

type Pet {
    _id: ID
    username: String
    email: String
    petType: String
    image: String
    age: Int
    sex: String
    bio: String
    relationshipStatus: String
    tails: [Tail]
    friends: [Pet]
    friendCount: Int
}



type Tail {
    _id: ID
    tailText: String
    createdAt: String
    postedBy: Pet
    comments: [Comment]
    commentCount: Int
}

type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
}

type PetType {
    _id: ID
    name: String!

}


type Query {
    me: Pet
    pets: [Pet]
    pet(_id: ID!): Pet
    tails(postedBy: ID): [Tail]
    tail(_id: ID!): Tail
    petTypes: [PetType]
    }

type Mutation {
    login(email: String!, password: String!): Auth
    addPet(username: String!, email: String!, password: String!, petType: String!, image: String, age: String, sex: String!, bio: String!, relationshipStatus: String): Auth
    addTail(tailText: String!): Tail
    addComment(tailId: ID!, commentText: String!): Tail
    addFriend(friendId: ID!): Pet
    addProfileImage(imageURL: String!): Pet
}

type Auth {
    token: ID!
    pet: Pet
}

`;

module.exports = typeDefs;