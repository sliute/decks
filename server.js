'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('./config/env');

// Require Apollo, HAPI, Mongoose, model(s) and schema(s)
const { ApolloServer, gql } = require('apollo-server-hapi');
const Hapi = require('hapi');
const Mongoose = require('mongoose');
const Deck = require('./server/models/Deck');
// Alternative to the typeDefs and resolvers provided in StartServer() below.
const schema = require('./server/graphql/schema');

async function StartServer() {
    const typeDefs = gql`
      type Deck {
        description: String
        id: String!
        name: String
        url: String
      }

      type Query {
        deck(id: String): Deck
        decks: [Deck]
      }
    `;

    const resolvers = {
      Query: {
        deck: (parent, args) => {
          return Deck.findById(args.id);
        },
        decks: () => {
          return Deck.find();
        }
      },
    };

    const server = new ApolloServer({ typeDefs, resolvers });

    const app = new Hapi.server({
      host: 'localhost',
      port: 4000,
      routes: {
        // Make it available via CORS to the React app server.
        cors: {
          origin: ['*']
        }
      }
    });

    app.route([
      {
        handler: (req, res) => {
          return Deck.find();
        },
        method: 'GET',
        path: '/api/v1/decks'
      },
      {
        handler: (req, res) => {
          const { description, name, url } = req.payload;
          const deck = new Deck({
            description,
            name,
            url
          });

          return deck.save();
        },
        method: 'POST',
        path: '/api/v1/decks'
      },
      {
        handler: (req, res) => {
          const { _id } = req.payload;
          return Deck.deleteOne({id: _id});
        },
        method: 'DELETE',
        path: '/api/v1/decks'
      }
    ]);
    
    // Cloud MongoDB connection, via URI in .env file
    Mongoose.connect(process.env.DB_URI);

    await server.applyMiddleware({
      app,
    });

    await server.installSubscriptionHandlers(app.listener);

    await app.start();
  }

  StartServer();