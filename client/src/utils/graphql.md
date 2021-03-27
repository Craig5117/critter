# Graphql Queries and Mutations Guide

## Quick Links
* [Queries](#queries)
    * [me](#me)
    * [pets](#pets)
    * [pet](#pet)
    * [tails](#tails)
    * [tail](#tail)
    * [petTypes](#petTypes)
* [Mutations](#mutations)
    * [addPet](#addPet)
    * [login](#login)
    * [addTail](#addTail)
    * [addComment](#addComment)
    * [addFriend](#addFriend)
    * []



## Queries

### me 
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
Requires: Authorizaton/HTTP Header (must be logged in)

### pets
```
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
```

### pet
```
query pet($username:String!) {
  pet(username: $username) {
    _id,
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
Requires: `usename`

### tails
```
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
  ```
Optional: filter by `username` to get one specific pet's tails

### tail
```
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
  ```
  Requires: tail's `_id`

  ### petTypes
  ```
  query {
    petTypes {
      _id
      name
    }
  }
  ```

  ## Mutations


  ### addPet
  ```
  mutation addPet($username: String!, $password: String!, $email: String!, $petType: String!, $age: String, $sex: String!, $bio: String!, $relationshipStatus: String) {
  addPet(username: $username, password: $password, email: $email, petType: $petType, age: $age, sex: $sex, bio: $bio, relationshipStatus: $relationshipStatus ) {
    token
    pet {
      _id,
      username,
      email,
      petType,
      age,
      sex,
      bio,
      relationshipStatus
    }
  }
}
```
Requires: all parameters with `!`, returns a token to log in user

### login
```
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    pet {
      _id
    }
  }
}
```
Requires: `email` and `password`, returns a token to log in user

### addTail
```
mutation addTail($tailText: String!) {
    addTail(tailText: $tailText) {
      _id
      tailText
      createdAt
      username
      commentCount
      comments {
        _id
      }
    }
  }
  ```
  Requires: `tailText`, must be logged in with `token`

### addComment
```
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
  ```
  Requires: `tailId` and `commentText`, must be logged in with `token`

  ### addFriend
  ```
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
  ```
  Requires: `_id` of pet you want to add, must be logged in with `token`

  ### addProfileImage
  ```
  mutation addProfileImage($imageURL: String!) {
    addProfileImage(imageURL: $imageURL) {
     _id,
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
  Requires: `imageURL` and needs login token so it knows what pet to update.


