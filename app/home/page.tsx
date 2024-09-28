import React from "react";
import useListPokemon from "../hooks/useListPokemon";

const HomePage: React.FC = () => {
  const { pokemonList, loading, error } = useListPokemon(
    "/pokemon?limit=20&offset=0"
  );

  return (
    <section className="home-page-container">
      {loading ? (
        <>Loading Pokémon... Gotta Catch 'Em All!</>
      ) : (
        pokemonList.map((x, index) => <p key={index}>{x.name}</p>)
      )}
    </section>
  );
};

export default HomePage;
