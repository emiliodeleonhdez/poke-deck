import React from "react";
import { Pokemon } from "../interfaces/pokemon";

type PokeCardProps = {
  pokeInfo: Pokemon;
  action?: () => void;
};

const PokeCard: React.FC<PokeCardProps> = ({ pokeInfo, action }) => {
  const { image, name, pokemonId } = pokeInfo;

  return (
    <div
      onClick={action}
      key={pokemonId}
      className="border-2 border-transparent hover:border-pokemon_strong_blue cursor-pointer bg-pokemon bg-opacity-70 hover:bg-opacity-60 w-52 h-60 m-3 rounded-md p-4 flex flex-col items-center justify-start"
    >
      <div className="w-32 flex justify-center items-center">
        <img className="bg-white p-3 rounded-full" src={image} alt="poke" />
      </div>
      <h2 className="capitalize font-bold text-2xl">{name}</h2>
    </div>
  );
};

export default PokeCard;
