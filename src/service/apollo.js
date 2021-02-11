import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        const selected = {
          __typename: 'Movie',
          id: `${id}`,
          isLiked: `${isLiked}`
        };
        cache.modify({
          id: cache.identify(selected),
          fields: {
            isLiked: () => !isLiked
          }
        });
      }
    }
  }
});

export default client;