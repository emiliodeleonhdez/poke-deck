import React from "react";
import { Pokemon } from "../interfaces/pokemon";
import PokeTypeIcon from "./PokeTypeIcon";

type PokeCardProps = {
  pokeInfo: Pokemon;
  action?: () => void;
};

const PokeCard: React.FC<PokeCardProps> = ({ pokeInfo, action }) => {
  const { image, name, pokemonId, types } = pokeInfo;

  return (
    <div
      onClick={action}
      key={pokemonId}
      className="text-wrap h-[355px] border-2 border-transparent hover:border-pokemon_strong_blue cursor-pointer bg-pokemon bg-opacity-70 hover:bg-opacity-60 w-52 h-60 m-3 rounded-md p-4 flex flex-col items-center justify-start"
    >
      <div className="w-32 flex justify-center items-center">
        <img className="bg-white p-3 rounded-full" src={image} alt="poke" />
      </div>
      <h2 className="capitalize w-full text-center font-bold text-xl m-2 p-2">
        {name}
      </h2>
      {types && <PokeTypeIcon types={types} />}
    </div>
  );
};

export default PokeCard;
