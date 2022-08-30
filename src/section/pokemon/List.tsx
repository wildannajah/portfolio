/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Card } from "@mui/material";
import Link from "next/link";
import { forwardRef } from "react";
import PokeCard from "../../components/pokemon/PokeCard";
import { Pokemon } from "../../pages/api/pokemonQuery";

interface ListProps {
  data: Pokemon[];
}
export default function List({ data }: ListProps) {
  // eslint-disable-next-line react/no-unstable-nested-components
  const CustomComponent = forwardRef((props, ref) => <div />);
  return (
    <div>
      {data?.map(({ id, name, number, types }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let props;
        return (
          <Link
            key={id}
            href={`http://localhost:3000/pokemon/encodeURIComponent${encodeURIComponent(
              id
            )}`}
          >
            <PokeCard id={id} name={name} number={number} types={types} />
          </Link>
        );
      })}
    </div>
  );
}
