import { useEffect, useState } from "react";
import PokeAxiosClient from "../client/apiClient";
import { pokeApiUrl } from "../utils/constants";

const pokeAxiosClient = new PokeAxiosClient(pokeApiUrl);

const useListPokemon = (endpoint: string) => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await pokeAxiosClient
          .get<any>(endpoint)
          .then((response) => {
            console.log(response)
            setPokemonList(response.results)
          });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  return { pokemonList, loading, error };
};

export default useListPokemon;
