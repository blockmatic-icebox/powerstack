import { GraphQLClient } from 'graphql-request';
// Create a GraphQL client for the server
let client: GraphQLClient;


const HOST = process.env.HOST as string;
const PORT = parseInt(process.env.PORT as string, 10);
// Create a GraphQL client for the server
const endpoint = `http://${HOST}:${PORT}/graphql`;
client = new GraphQLClient(endpoint);


export { client };

