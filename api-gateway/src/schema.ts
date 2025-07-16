import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Donante {
    id: ID!
    nombre: String!
    correo: String!
    telefono: String
  }

  type Query {
    donantes: [Donante]
  }
`;
