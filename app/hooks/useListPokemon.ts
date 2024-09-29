import { useEffect, useState } from "react";
import PokeAxiosClient from "../client/apiClient";
import { pokeApiUrl } from "../utils/constants";
import {
  Pokemon,
  PokemonResponse,
  PokemonResponsePromise,
  PokemonType,
} from "../interfaces/pokemon";
import { useError } from "../context/ErrorContext";

const pokeAxiosClient = new PokeAxiosClient(pokeApiUrl);

const useListPokemon = (endpoint: string) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const { setError } = useError();
  useEffect(() => {
    const getPokemons = async () => {
      try {
        const initList = await pokeAxiosClient.get<PokemonResponse>(endpoint);
        const pokemonPromises = initList.results.map(
          async (pokemon: { url: string }) => {
            const res = await pokeAxiosClient.get<PokemonResponsePromise>(
              pokemon.url
            );
            return {
              pokemonId: res.id,
              name: res.name,
              image: res.sprites.front_default,
              types: res.types.map((type: PokemonType) => type.type.name),
            };
          }
        );

        const pokemons = await Promise.all(pokemonPromises);
        setPokemonList(pokemons);
      } catch (error) {
        setError(
          "Failed to fetch Pokémon data. Please try again later." + error
        );
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, [endpoint]);

  return { pokemonList, loading };
};

export default useListPokemon;
