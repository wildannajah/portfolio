/* eslint-disable @next/next/no-img-element */
import { Stack, styled, Typography } from "@mui/material";
import { Pokemon } from "../../pages/api/pokemonQuery";

export const Card = styled("div")(({ theme }) => ({
  position: "relative",
  boxShadow: theme.shadows[3],
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  minHeight: "100px",
  margin: "2rem 0",

  // [theme.breakpoints.up("md")]: {
  //   margin: "0 auto",
  // },
}));

export default function PokeCard({ number, name, types }: Pokemon) {
  return (
    <Card
      sx={{
        backgroundColor: `pokemon.background.${types[0]?.toLocaleLowerCase()}`,
      }}
    >
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
      <Stack
        spacing={1}
        sx={{
          margin: "auto 1rem",
        }}
      >
        <Typography color="#fff">{name}</Typography>

        <Stack spacing={1} direction="row">
          {types.map((type) => {
            const srcImg = `/assets/${type.toLocaleLowerCase()}.svg`;
            return (
              <Stack
                key={type}
                direction="row"
                sx={{
                  backgroundColor: `pokemon.type.${type.toLocaleLowerCase()}`,
                  padding: "0.25rem",
                  borderRadius: "0.25rem",
                }}
              >
                <img
                  src={srcImg}
                  alt=""
                  color="#fff"
                  width="15px"
                  style={{
                    marginRight: "0.25rem",
                  }}
                />
                <Typography
                  variant="body2"
                  color="#fff"
                  key={type.toLocaleLowerCase()}
                  textTransform="capitalize"
                >
                  {type}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Card>
  );
}
