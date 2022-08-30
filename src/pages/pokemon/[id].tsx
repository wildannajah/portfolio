/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import BadgeType from "../../components/pokemon/BadgeType";
import Page from "../../components/pokemon/Page";
import { PokemonDetail, PokemonVars, GET_POKEMON } from "../api/pokemonQuery";

export default function PokemonDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, networkStatus } = useQuery<PokemonDetail, PokemonVars>(
    GET_POKEMON,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        id,
      },
    }
  );
  const { pokemon } = data || {};
  const { number, types, name } = pokemon || {};
  let bg = "inherit";
  if (types !== undefined) {
    bg = `pokemon.background.${types[0].toLowerCase()}`;
  }
  return (
    <Page
      sx={{
        backgroundColor: bg,
        p: "2rem",
      }}
    >
      {pokemon && (
        <Stack direction="row" justifyContent="center" spacing={2}>
          {number && (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseInt(
                number,
                10
              )}.png`}
              alt=""
              style={{
                height: "100px",
                width: "100px",
              }}
            />
          )}

          <img
            src="/assets/pokeBG2.svg"
            alt=""
            style={{
              position: "absolute",
              right: 0,
              // bottom: 0,
              height: "100px",
            }}
          />
          <Stack justifyContent="center">
            <Typography variant="h3">{name} </Typography>
            <BadgeType types={types} />
          </Stack>
        </Stack>
      )}
      <Box
        sx={{
          backgroundColor: "background.default",
        }}
      >
        asd
      </Box>
    </Page>
  );
}
