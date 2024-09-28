import { useEffect, useState } from "react";
import PokeAxiosClient from "../client/apiClient";
import { pokeApiUrl } from "../utils/constants";
import { Pokemon } from "../interfaces/pokemon";

const pokeAxiosClient = new PokeAxiosClient(pokeApiUrl);

const useListPokemon = (endpoint: string) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const initList = await pokeAxiosClient.get<any>(endpoint);
        const pokemonPromises = initList.results.map(
          async (pokemon: { url: string }) => {
            const res = await pokeAxiosClient.get<any>(pokemon.url);
            return {
              pokemonId: res.id,
              name: res.name,
              image: res.sprites.front_default,
              types: res.types.map((type: any) => type.type.name),
            };
          }
        );

        const pokemons = await Promise.all(pokemonPromises);
        setPokemonList(pokemons);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, [endpoint]);

  return { pokemonList, loading, error };
};

export default useListPokemon;
