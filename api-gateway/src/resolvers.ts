import { mergeResolvers } from '@graphql-tools/merge';
import { resolvers as DonanteResolvers } from './modulo1_TS/donante/donante.resolver';

export const resolvers = mergeResolvers([
  DonanteResolvers
]);
