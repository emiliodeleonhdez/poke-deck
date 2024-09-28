import React, { useState } from "react";
import useListPokemon from "../hooks/useListPokemon";
import PokeCard from "../components/PokeCard";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const [page, setPage] = useState(1); // Estado para la página actual
  const limit = 20; // Número de Pokémon por página
  const totalPokemon = 1300; // Total de Pokémon disponibles
  const totalPages = Math.ceil(totalPokemon / limit); // Calcular el número total de páginas
  const offset = (page - 1) * limit; // Calcular offset basado en la página actual
  const router = useRouter();

  // Usa el hook para obtener la lista de Pokémon con el offset y limit actualizados
  const { pokemonList, loading, error } = useListPokemon(
    `/pokemon?limit=${limit}&offset=${offset}`
  );

  // Función para manejar el detalle de un Pokémon
  const handlePokemonDetail = (id: number) => {
    router.push(`/pokemon-detail?id=${id}`);
  };

  // Función para cambiar de página
  const handlePageChange = (newPage: number) => {
    setPage(newPage); // Actualiza la página actual
  };

  return (
    <section className="home-page-container w-full flex flex-col ">
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

          {/* Controles de paginación */}
          <div className="pagination-controls flex gap-2 mt-4 w-5/6 p-4 overflow-x-auto self-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={`px-4 py-2 rounded ${
                    pageNumber === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default HomePage;
