import { useState, useEffect } from "react";
import { Pokemon } from "../interfaces/pokemon";

const useFavoritePokemon = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    try {
      const favorites = sessionStorage.getItem("caughtPokemons");
      if (favorites) {
        setPokemonList(JSON.parse(favorites));
      }
    } catch (err) {
      setError("Error loading favorites");
      console.error("Error parsing favorites from sessionStorage", err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { pokemonList, loading, error };
};

export default useFavoritePokemon;
