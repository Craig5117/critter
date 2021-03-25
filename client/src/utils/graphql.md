# Graphql Queries and Mutations Guide

## Queries

### Me (get logged in account)
```
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
```
Requires Authorizaton/HTTP Header (must be logged in)

#### pets (get all pets)