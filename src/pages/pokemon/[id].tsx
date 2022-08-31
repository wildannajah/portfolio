/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@apollo/client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import BadgeType, { BadgeOnly } from "../../components/pokemon/BadgeType";
import Page from "../../components/pokemon/Page";
import { PokemonDetail, PokemonVars, GET_POKEMON } from "../api/pokemonQuery";

export default function PokemonDetails() {
  const router = useRouter();
  const { id, name, number, bgc } = router.query;
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
  const {
    classification,
    types,
    height,
    weight,
    attacks,
    weaknesses,
    resistant,
  } = pokemon || {};
  const { fast, special } = attacks || {};
  let bg = "inherit";
  if (types !== undefined) {
    bg = `pokemon.background.${bgc?.toString().toLowerCase()}`;
  }
  const pokedexData = [
    {
      text: "Species",
      value: classification,
    },
    {
      text: "Height",
      value: height?.minimum,
    },
    {
      text: "Weight",
      value: weight?.minimum,
    },
  ];
  return (
    <Box>
      <Box
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
                  number.toString(),
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
              <Typography variant="h3" color="#fff">
                {name}{" "}
              </Typography>
              <BadgeType types={types} />
            </Stack>
          </Stack>
        )}
      </Box>
      <Box
        sx={{
          backgroundColor: bg,
          // minHeight: "100vh",
          // p: "2rem",
          // position: "absolute",
          bottom: 0,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Page
          sx={{
            borderRadius: "25px 25px 0 0",
            backgroundColor: "background.default",
            minHeight: "85vh",
            width: "100%",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              marginTop: "3rem",
            }}
          >
            <Typography
              color={`pokemon.type.${bgc?.toString().toLocaleLowerCase()}`}
            >
              Pokédex
            </Typography>
            <Stack spacing={1}>
              {pokedexData.map(({ text, value }) => (
                <Grid container key={text}>
                  <Grid item xs={4}>
                    <Typography>{text}</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography>{value}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Stack>
            <Typography
              color={`pokemon.type.${bgc?.toString().toLocaleLowerCase()}`}
            >
              Attacks
            </Typography>
            <Stack spacing={1}>
              <Grid container>
                <Grid item xs={4}>
                  <Typography>Fast Attack</Typography>
                </Grid>
                <Stack>
                  {fast?.map((FastAttack) => (
                    <div key={FastAttack.name}>{FastAttack.name}</div>
                  ))}
                </Stack>
              </Grid>
            </Stack>
            <Stack spacing={1}>
              <Grid container>
                <Grid item xs={4}>
                  <Typography>Sp. Attack</Typography>
                </Grid>
                <Stack>
                  {special?.map((FastAttack) => (
                    <div key={FastAttack.name}>{FastAttack.name}</div>
                  ))}
                </Stack>
              </Grid>
            </Stack>
            <Typography
              color={`pokemon.type.${bgc?.toString().toLocaleLowerCase()}`}
            >
              Weakness
            </Typography>
            <BadgeOnly types={weaknesses} />
            <Typography
              color={`pokemon.type.${bgc?.toString().toLocaleLowerCase()}`}
            >
              Resistance
            </Typography>
            <BadgeOnly types={resistant} />
          </Stack>
        </Page>
      </Box>
    </Box>
  );
}
