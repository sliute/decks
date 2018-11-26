# Decks
A basic item collection app built on:
- Hapi, Apollo Server (GraphQL) and MongoDB for the back-end.
- React, Apollo Client and TypeScript for the front-end (which is an ejected create-react-app-ts boilerplate--the original readme is [here](CRAT_README.md)).

## Usage
**NOTE: This is just a sandbox. Handle accordingly.**

To install:
- set up a MongoDB database somewhere in the cloud, and save the access URL into a `DB_URI` constant in `.env`.
- insert a few records with Postman (for now)
- `npm install`
- `npm run dev`

The backend server is then available at `http://localhost:4000`, and the React app opens a browser tab at `http://localhost:3000`, where a list of collectible playing card decks is displayed.

## To Do
- tests, for both GraphQL resolvers and React components
- styling
- validation (with Joi)
- documentation
- decide whether to more strongly separate the client from the server, by making it  a separate app (own folder, own `package.json`).

