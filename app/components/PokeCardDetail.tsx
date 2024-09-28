import React from "react";
import {
  Ability,
  EvolutionChain,
  Pokemon,
  Species,
  Stat,
} from "../interfaces/pokemon";
import PokeTypeIcon from "./PokeTypeIcon";

type PokeCardDetailProps = {
  pokeInfo: Pokemon;
  action?: () => void;
  evolutionChain?: EvolutionChain;
};

const PokeCardDetail: React.FC<PokeCardDetailProps> = ({
  pokeInfo,
  action,
  evolutionChain,
}) => {
  const { image, name, pokemonId, types, ability, stats } = pokeInfo;

  console.log("evolutionChain", evolutionChain);

  const getEvolutions = (chain: EvolutionChain["chain"]): string[] => {
    const evolutions: string[] = [];

    let currentChain = chain;
    while (currentChain) {
      evolutions.push(currentChain.species.name);

      if (currentChain.evolves_to && currentChain.evolves_to.length > 0) {
        currentChain = currentChain.evolves_to[0];
      } else {
        currentChain = null;
      }
    }

    return evolutions;
  };

  const evolutions = evolutionChain ? getEvolutions(evolutionChain.chain) : [];

  return (
    <div
      onClick={action}
      key={pokemonId}
      className="h-full w-1/2 border-2 border-transparent hover:border-pokemon_strong_blue cursor-pointer bg-pokemon bg-opacity-70 hover:bg-opacity-60 w-52 h-60 m-3 rounded-md p-4 flex flex-col items-center justify-start"
    >
      <div className="w-32 flex justify-center items-center">
        <img className="bg-white p-3 rounded-full" src={image} alt="poke" />
      </div>
      <h2 className="capitalize font-bold text-2xl m-2 p-2">{name}</h2>
      {types && <PokeTypeIcon types={types} />}
      <ul className="flex w-5/6 items-center justify-evenly">
        {ability?.map((item: Ability) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
      <ul className="flex flex-col w-5/6 items-start justify-evenly m-2 p-2">
        {stats?.map((stat: Stat) => (
          <li key={stat.name}>
            <span className="capitalize font-bold">{stat.name}</span>:{" "}
            <span>{stat.value}</span>
          </li>
        ))}
        {evolutions.length > 1 ? (
          <div className="flex items-center">
            <span className="font-bold">Evolves to</span>:{" "}
            <ul className="flex space-x-1">
              {evolutions.slice(1).map((evo, index) => (
                <li key={index} className="capitalize">
                  {evo}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No evolution</p>
        )}
      </ul>
    </div>
  );
};

export default PokeCardDetail;
