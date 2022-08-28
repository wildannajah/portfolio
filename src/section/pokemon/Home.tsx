/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, NetworkStatus } from "@apollo/client";
import { Button } from "@mui/material";
import Page from "../../components/pokemon/Page";
import {
  GET_POKEMONS,
  PokemonData,
  PokemonVars,
} from "../../query/pokemonQuery";

export default function App() {
  const { data, fetchMore, error, networkStatus } = useQuery<
    PokemonData,
    PokemonVars
  >(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: 20,
    },
  });
  const { pokemons } = data || {};
  const { results, nextOffset } = pokemons || {};
  const hasMore = (nextOffset || -1) > 0;

  const loadingFirstTime = networkStatus === NetworkStatus.loading;
  const loadingFetchMore = networkStatus === NetworkStatus.fetchMore;

  const fetchNext = () => {
    try {
      fetchMore({
        variables: {
          offset: nextOffset,
          limit: 10,
        },
      });
    } catch (_) {
      // error
    }
  };

  console.log(pokemons);
  return (
    <Page>
      asd
      {hasMore && !loadingFirstTime && !loadingFetchMore && (
        <Button variant="outlined" onClick={fetchNext}>
          Show more
        </Button>
      )}
    </Page>
  );
}
