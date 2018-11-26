const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = graphql;

const DeckType = require('./DeckType');
const Deck = require('../models/Deck');

const RootQuery = new GraphQLObjectType({
    fields: {
        deck: {
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                return Deck.findById(args.id);
            },
            type: DeckType
        },
        decks: {
            args: {},
            resolve(parent, args){
                return Deck.find();
            },
            type: new GraphQLList(DeckType)
        }
    },
    name: 'RootQueryType'
});

module.exports = new GraphQLSchema({
    query: RootQuery
});