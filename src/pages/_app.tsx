import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { offsetLimitPagination } from "@apollo/client/utilities";
import { store } from "../redux/store";
import ThemeProvider from "../theme";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // pokemons: offsetLimitPagination(),
        },
      },
    },
  }),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
