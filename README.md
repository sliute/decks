# Decks
A basic item collection app built on:
- Hapi, Apollo Server (GraphQL) and MongoDB for the back-end.
- React, Apollo Client and TypeScript for the front-end (which is an ejected create-react-app-ts boilerplate--the original readme is [here](CRAT_README.md)).

## Usage
**NOTE: This is just a sandbox. Handle accordingly.**

To install:
- set up a MongoDB database somewhere in the cloud, and save the access URL into a `DB_URI` constant in `.env`.
- `npm install`
- `npm run dev`

The backend server is then available at `http://localhost:4000`, and the React app opens a browser tab at `http://localhost:3000`.
