export const typeDefs = /* GraphQL */ `
  type User {
    id: ID!
    role: String!
    name: String!
    email: String!
  }

  type Task {
    id: ID!
    title: String!
    done: Boolean!
  }

  type Query {
    hello: String!
    users(role: String): [User!]!
    role: String!
    tasks: [Task!]!
  }
`;
