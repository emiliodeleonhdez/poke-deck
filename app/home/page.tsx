import React, { useState } from "react";
import useListPokemon from "../hooks/useListPokemon";
import PokeCard from "../components/PokeCard";
import { useRouter } from "next/navigation";
import { limit } from "../utils/constants";
import PokemonPaginator from "../components/PokemonPaginator";

const HomePage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * limit;
  const router = useRouter();

  const { pokemonList, loading } = useListPokemon(
    `/pokemon?limit=${limit}&offset=${offset}`
  );

  const handlePokemonDetail = (id: number) => {
    router.push(`/pokemon-detail?id=${id}`);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <section className="home-page-container w-full flex flex-col">
      {loading ? (
        <>Loading Pokémon... Gotta Catch 'Em All!</>
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

          <PokemonPaginator page={page} onPageChange={handlePageChange} />
        </>
      )}
    </section>
  );
};

export default HomePage;
