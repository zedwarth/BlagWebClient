import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../../../../../environments/environment';

export const ApolloClientProvider = [
  { provide: APOLLO_OPTIONS, useFactory: createApollo, deps: [HttpLink] }
];

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: environment.graphQlEndpoint }),
    cache: new InMemoryCache(),
  };
}
