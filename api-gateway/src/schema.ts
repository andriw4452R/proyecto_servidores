import { mergeTypeDefs } from '@graphql-tools/merge';
import { typeDefs as Donante } from './modulo1_TS/donante/donante.schema';

export const typeDefs = mergeTypeDefs([
  Donante
]);
