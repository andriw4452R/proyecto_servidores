import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Donante {
    id: ID!
    nombre: String!
    correo: String!
    telefono: String
  }

  input CrearDonanteInput {
    nombre: String!
    tipo: String!
    correo: String!
    telefono: String!
    direccion: String!
    fecha_registro: String!
  }

  type Query {
    donantes: [Donante]
    getDonante(id: ID!): Donante
  }

  type Mutation {
    crearDonante(input: CrearDonanteInput!): Donante
  }
`;
