// schema/index.js
const { GraphQLSchema, GraphQLObjectType, GraphQLList } = require('graphql');
const MenuType = require('./menu');

// Sample in-memory data
const menuData = [
    {
        category: 'APPETIZERS',
        name: 'Iceberg Wedge Salad with House Cured Bacon',
        description: 'tomato salsa gorgonzola',
        price: 7.50
    },
    //...other menu items
];

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        menus: {
            type: new GraphQLList(MenuType),
            resolve(parent, args) {
                return menuData;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
