/* eslint-disable @next/next/no-img-element */
import { Stack, Typography } from "@mui/material";

interface BadgeTypeProps {
  types: any;
}

export default function BadgeType({ types }: BadgeTypeProps) {
  return (
    <Stack spacing={1} direction="row">
      {types?.map((type: string) => {
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
  );
}
