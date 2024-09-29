import React from "react";
import { useRouter } from "next/navigation";
import PokeBallFavoriteNavButton from "./PokeBallFavoriteNavButton";

const PokeNavMenu: React.FC = () => {
  const router = useRouter();

  const handleDocsClick = () => {
    window.open("https://pokeapi.co/docs/v2", "_blank");
  };

  const handleAboutClick = () => {
    window.open("https://github.com/emiliodeleonhdez", "_blank");
  };

  return (
    <nav className="flex space-x-4 items-center">
      <PokeBallFavoriteNavButton onClick={() => router.push("/favorites")} />
      <button
        onClick={() => router.push("/")}
        className="text-blue-500 hover:text-blue-700 font-bold"
      >
        Home
      </button>
      <button
        onClick={handleDocsClick}
        className="text-blue-500 hover:text-blue-700 font-bold"
      >
        Docs
      </button>
      <button
        onClick={handleAboutClick}
        className="text-blue-500 hover:text-blue-700 font-bold"
      >
        About Developer
      </button>
    </nav>
  );
};

export default PokeNavMenu;
