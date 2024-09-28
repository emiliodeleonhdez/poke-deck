import React from "react";
import useListPokemon from "../hooks/useListPokemon";
import PokeCard from "../components/PokeCard";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const { pokemonList, loading, error } = useListPokemon(
    "/pokemon?limit=20&offset=20"
  );
  const handlePokemonDetail = (id: number) => {
    router.push(`/pokemon-detail?id=${id}`);
  };

  const router = useRouter();

  return (
    <section className="home-page-container w-full flex flex-wrap items-center justify-center">
      {loading ? (
        <>Loading Pokémon... Gotta Catch 'Em All!</>
      ) : (
        pokemonList.map((pokemon, index) => (
          <PokeCard
            key={index}
            pokeInfo={pokemon}
            action={() => handlePokemonDetail(pokemon.pokemonId)}
          />
        ))
      )}
    </section>
  );
};

export default HomePage;
