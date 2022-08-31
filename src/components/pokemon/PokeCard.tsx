/* eslint-disable @next/next/no-img-element */
import { Stack, styled, Typography } from "@mui/material";
import { Pokemon } from "../../pages/api/pokemonQuery";
import BadgeType from "./BadgeType";

export const Card = styled("div")(({ theme }) => ({
  position: "relative",
  boxShadow: theme.shadows[3],
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  minHeight: "100px",
}));

export default function PokeCard({ number, name, types }: Pokemon) {
  return (
    <Card
      sx={{
        backgroundColor: `pokemon.background.${types[0]?.toLocaleLowerCase()}`,
      }}
    >
      <img
        src="/assets/pokeBG.svg"
        alt=""
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: "100px",
        }}
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseInt(
          number,
          10
        )}.png`}
        alt=""
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: "100px",
        }}
      />
      <Stack
        spacing={1}
        sx={{
          margin: "auto 1rem",
        }}
      >
        <Typography color="#fff">{name}</Typography>

        <BadgeType types={types} />
      </Stack>
    </Card>
  );
}
