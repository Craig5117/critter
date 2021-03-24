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
    createdAt: Date
    petUsername: String
    comments: [Comment]
    commentCount: Int
}

type Comment {
    _id: ID
    commentText: String
    createdAt: Date
    petUsername: String
}

type Auth {
    token: ID!
    pet: Pet
}

type Query {
    me: Pet
    pets: [Pet]
    pet(petUsername: String!): Pet
    tails(petUsername: String): [Tail]
    tail(_id: ID!): Tail
    }

type Mutation {
    login(email: String!, password: String!): Auth
    addPet(username: String!, email: String!, password: String!): Auth
    addTail(tailText: String!): Tail
    addComment(tailId: ID!, commentText: String!): Tail
    addFriend(friendId: ID!): User
    addProfileImage(imageUrl: String!): User
}
`;

module.exports = typeDefs;