import React from "react";
import { Pokemon } from "../interfaces/pokemon";

type PokeBallFavoriteNavButtonProps = {
  tooltipText?: string;
  onClick: () => void;
};

const PokeBallFavoriteNavButton: React.FC<PokeBallFavoriteNavButtonProps> = ({
  onClick,
}) => {
  return (
    <div
      className="relative flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <img
        className="border-transparent cursor-pointer"
        src={`/icons/pokeball.svg`}
        alt="icon"
        width={32}
        height={32}
      />
    </div>
  );
};

export default PokeBallFavoriteNavButton;
