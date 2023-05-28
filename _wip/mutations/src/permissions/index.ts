import { shield } from "graphql-shield";

export const permissions = shield({
  Query: {},
  Mutation: {},
  Product: {},
});
