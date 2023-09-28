

# Restaurant Menu API

This is a GraphQL API for a restaurant menu.

## Running the API Locally

1. Clone the repository: `git clone https://github.com/topgentleman826/restaurant-api.git`
2. Navigate to the project folder: `cd restaurant-api`
3. Install the dependencies: `npm install`
4. Run the API: `node index.js`
5. Open your browser and navigate to `http://localhost:4000/graphql` to access the GraphiQL interface.

## Sample Query

```graphql
{
    menus {
        category
        name
        description
        price
    }
}
