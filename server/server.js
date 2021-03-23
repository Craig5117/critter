const express = require('express');
const path = require('path');

// const { ApolloServer } = require('apollo-server-express');

// import typeDefs and resolvers
// import JWT auth logic
// import db from config/connection

const PORT = process.env.PORT || 3001;
const app = express();

// const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    // context: authMiddleware
// });

// server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// serving static assets from client/build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

// db logic wrap server here
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })