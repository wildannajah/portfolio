/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Card } from "@mui/material";
import Link from "next/link";
import PokeCard from "../../components/pokemon/PokeCard";
import { Pokemon } from "../../pages/api/pokemonQuery";

interface ListProps {
  data: Pokemon[];
}
export default function List({ data }: ListProps) {
  return (
    <div>
      {data?.map(({ id, name, number, types }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        let props;
        return (
          // <Link href="http://localhost:3000/pokemon/" key={id}>
          <PokeCard
            id={id}
            name={name}
            number={number}
            types={types}
            key={id}
          />
          // </Link>
        );
      })}
    </div>
  );
}
