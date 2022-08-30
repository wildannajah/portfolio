import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { PokemonList, PokemonVars, GET_POKEMON } from "../api/pokemonQuery";

export default function PokemonDetail() {
  const router = useRouter();
  const { id } = router.query;
  const first = 10;
  const { data, fetchMore, error, networkStatus } = useQuery<
    PokemonList,
    PokemonVars
  >(GET_POKEMON, {
    notifyOnNetworkStatusChange: true,
    variables: {
      id,
    },
  });
  console.log(data);
  return <p>{id}</p>;
}
