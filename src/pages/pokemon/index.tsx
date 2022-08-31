/* eslint-disable @typescript-eslint/no-unused-vars */
import { NetworkStatus, useQuery } from "@apollo/client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import Page from "../../components/pokemon/Page";
import List from "../../section/pokemon/List";
import { GET_POKEMONS, PokemonList, PokemonVars } from "../api/pokemonQuery";

export default function Pokemon() {
  const first = 10;
  const { data, fetchMore, error, networkStatus } = useQuery<
    PokemonList,
    PokemonVars
  >(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      first,
    },
  });
  const [offset, setOffset] = useState(10);
  const fetchNext = () => {
    setOffset(offset + 10);
    try {
      fetchMore({
        variables: {
          first: first + offset,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;

          const merged = fetchMoreResult.pokemons.slice(
            prevResult.pokemons.length
          );
          return {
            pokemons: [
              ...fetchMoreResult.pokemons.slice(prevResult.pokemons.length),
            ],
          };
        },
      });
    } catch (__) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const { pokemons } = data || {};
  // const { results, nextOffset } = pokemons || {};
  // const hasMore = (nextOffset || -1) > 0;
  // console.log(pokemons);

  const loadingFirstTime = networkStatus === NetworkStatus.loading;
  const loadingFetchMore = networkStatus === NetworkStatus.fetchMore;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Page
        sx={{
          width: "100%",
        }}
      >
        <div>{pokemons?.length && <List data={pokemons} />}</div>
        <Box textAlign="center" padding={2}>
          <Button variant="outlined" onClick={fetchNext}>
            Load More
          </Button>
        </Box>
      </Page>
    </Box>
  );
}
