const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const DeckType = new GraphQLObjectType({
    fields: () => ({
        description: { type: GraphQLString },
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    }),
    name: 'Deck',
});

module.exports = DeckType;