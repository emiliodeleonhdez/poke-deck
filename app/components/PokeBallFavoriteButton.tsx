import React from "react";
import { Pokemon } from "../interfaces/pokemon";

type PokeBallFavoriteButtonProps = {
  tooltipText?: string;
  onClick: (pokemon: Pokemon) => void;
  pokeInfo: Pokemon;
};

const PokeBallFavoriteButton: React.FC<PokeBallFavoriteButtonProps> = ({
  tooltipText = "Pokéball, go!",
  onClick,
  pokeInfo,
}) => {
  return (
    <div
      className="relative flex items-center justify-center group"
      onClick={() => onClick(pokeInfo)}
    >
      <img
        className="border-transparent cursor-pointer"
        src={`/icons/pokeball.svg`}
        alt="icon"
        width={32}
        height={32}
      />
      <span className="absolute bottom-full mb-2 hidden w-28 group-hover:flex items-center justify-center px-2 py-1 bg-black text-white text-xs rounded">
        {tooltipText}
      </span>
    </div>
  );
};

export default PokeBallFavoriteButton;
