import { Pokemon } from "../interfaces/pokemon";

export const addPokemonToStorage = (pokemon: Pokemon) => {
  let parsedPokemons: Pokemon[] = [];

  const pokemonsInStorage = sessionStorage.getItem("caughtPokemons");

  if (pokemonsInStorage) {
    try {
      parsedPokemons = JSON.parse(pokemonsInStorage);
    } catch (error) {
      console.error("Error parsing session storage JSON", error);
    }
  }

  const isPokemonInStorage = parsedPokemons.some(
    (storedPokemon) => storedPokemon.pokemonId === pokemon.pokemonId
  );

  if (!isPokemonInStorage) {
    parsedPokemons.push(pokemon);
    sessionStorage.setItem("caughtPokemons", JSON.stringify(parsedPokemons));
  }
};
