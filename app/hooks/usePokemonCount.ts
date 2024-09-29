import { useEffect, useState } from "react";
import PokeAxiosClient from "../client/apiClient";
import { pokeApiUrl } from "../utils/constants";
import { PokemonResponse } from "../interfaces/pokemon";

const usePokemonCount = () => {
  const pokeAxiosClient = new PokeAxiosClient(pokeApiUrl);
  const [totalPokemon, setTotalPokemon] = useState<number>(0);

  useEffect(() => {
    const fetchTotalPokemon = async () => {
      try {
        const response = await pokeAxiosClient.get<PokemonResponse>(
          "/pokemon?limit=1"
        );
        setTotalPokemon(response.count);
      } catch (error) {
        console.error("Error fetching total Pokémon count:", error);
      }
    };

    fetchTotalPokemon();
  }, []);
  return { totalPokemon };
};

export default usePokemonCount;
