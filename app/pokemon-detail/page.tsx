"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import usePokemonDetails from "../hooks/usePokemonDetails";
import PokeCardDetail from "../components/PokeCardDetail";

const PokemonDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.get("id") : null;

  const { pokemonDetails, evolutionChain } = usePokemonDetails(search);

  return (
    <section className="pokemon-detail-container flex justify-center">
      {pokemonDetails ? (
        <PokeCardDetail pokeInfo={pokemonDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default PokemonDetail;
