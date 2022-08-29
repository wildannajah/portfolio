/* eslint-disable @typescript-eslint/no-unused-vars */
import { NetworkStatus, useQuery } from "@apollo/client";
import Page from "../../components/pokemon/Page";
import { GET_POKEMONS } from "../api/pokemonQuery";

export default function Pokemon() {
  const { data, fetchMore, error, networkStatus } = useQuery(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      first: 20,
    },
  });

  const { pokemons } = data || {};
  // const { results, nextOffset } = pokemons || {};
  // const hasMore = (nextOffset || -1) > 0;

  const loadingFirstTime = networkStatus === NetworkStatus.loading;
  const loadingFetchMore = networkStatus === NetworkStatus.fetchMore;
  console.log(pokemons);
  return (
    <Page>
      {pokemons?.map(({ name }: any) => {
        console.log();
        return <div key={name}>{name}</div>;
      })}
    </Page>
  );
}
