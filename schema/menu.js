// schema.js
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

const MenuType = new GraphQLObjectType({
    name: 'Menu',
    fields: () => ({
        category: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat }
    })
});

module.exports = MenuType;
