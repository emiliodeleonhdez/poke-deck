import React, { useEffect } from "react";
import useListPokemon from "../hooks/useListPokemon";

const HomePage: React.FC = () => {
  const { pokemonList, loading, error } = useListPokemon(
    "/pokemon?limit=20&offset=60"
  );

  useEffect(() => {
    if (pokemonList) {
      console.log("POKE LIST IN FRONT", pokemonList);
    }
  });

  return (
    <section className="home-page-container">
      {loading ? (
        <>Loading Pokémon... Gotta Catch 'Em All!</>
      ) : (
        pokemonList.map((x, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <img src={x.image} alt="poke" />
            <p>{x.name}</p>

          </div>
        ))
      )}
    </section>
  );
};

export default HomePage;
