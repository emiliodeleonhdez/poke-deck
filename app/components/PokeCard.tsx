import React from "react";
import { Pokemon } from "../interfaces/pokemon";

type PokeCardProps = {
  id: number;
  pokeInfo: Pokemon;
};

const PokeCard: React.FC<PokeCardProps> = ({ pokeInfo, id }) => {
  const { types, image, name } = pokeInfo;

  return (
    <div
      key={id}
      className={`${
        types && types.length > 0 ? `!bg-${types[0]}` : "!bg-normal"
      } border-2 border-solid border-dark w-52 h-60 m-3 rounded-md p-4 flex flex-col items-center justify-start`}
    >
      <div className="w-32 flex justify-center items-center">
        <img className="bg-white rounded-full" src={image} alt="poke" />
      </div>
      <h2 className="capitalize font-bold text-2xl">{name}</h2>
    </div>
  );
};

export default PokeCard;
