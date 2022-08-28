import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "../section/pokemon/Home";
import offsetLimitPagination from "../utils/offsetLimitPagination";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: offsetLimitPagination(),
        },
      },
    },
  }),
});

export default function Pokemon() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
