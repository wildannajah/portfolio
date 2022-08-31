/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Card } from "@mui/material";
import Link from "next/link";
import { forwardRef } from "react";
import PokeCard from "../../components/pokemon/PokeCard";
import useResponsive from "../../hooks/useResponsive";
import { Pokemon } from "../../pages/api/pokemonQuery";

interface ListProps {
  data: Pokemon[];
}
export default function List({ data }: ListProps) {
  // eslint-disable-next-line react/no-unstable-nested-components
  const CustomComponent = forwardRef(
    ({ id, name, number, types }: Pokemon, ref) => (
      <PokeCard id={id} name={name} number={number} types={types} />
    )
  );
  const smUp = useResponsive("up", "sm");
  return (
    <Box
      gridTemplateColumns={smUp ? "1fr 1fr" : "1fr"}
      alignItems="center"
      display="grid"
      gap="1.5rem"
      paddingTop={smUp ? "5rem" : "3.5rem"}
    >
      {data?.map(({ id, name, number, types }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let props;
        return (
          <Link
            key={id}
            href={{
              pathname: "/pokemon/[id]",
              query: { id, name, number, bgc: types[0] },
            }}
          >
            <a>
              <CustomComponent
                id={id}
                name={name}
                number={number}
                types={types}
              />
            </a>
          </Link>
        );
      })}
    </Box>
  );
}
