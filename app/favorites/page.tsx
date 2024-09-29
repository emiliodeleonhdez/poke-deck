"use client";
import React from "react";
import useFavoritePokemon from "../hooks/useFavoritePokemon";
import PokeCard from "../components/PokeCard";
import { useRouter } from "next/navigation";

const FavoritesPage: React.FC = () => {
  const router = useRouter();
  const { pokemonList, loading } = useFavoritePokemon();

  const handlePokemonDetail = (id: number) => {
    router.push(`/pokemon-detail?id=${id}`);
  };

  return (
    <section className="home-page-container w-full flex flex-col">
      {loading ? (
        <>Loading your favorite Pokémon...</>
      ) : (
        <>
          <section className="home-page-pokemon-containera w-full flex flex-wrap items-center justify-center">
            {pokemonList.map((pokemon, index) => (
              <PokeCard
                key={index}
                pokeInfo={pokemon}
                action={() => handlePokemonDetail(pokemon.pokemonId)}
              />
            ))}
          </section>
          {pokemonList.length === 0 && <p>No favorite Pokémon yet!</p>}
        </>
      )}
    </section>
  );
};

export default FavoritesPage;
