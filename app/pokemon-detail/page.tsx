"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import PokeAxiosClient from "../client/apiClient";
import { pokeApiUrl } from "../utils/constants";
import usePokemonDetails from "../hooks/usePokemonDetails";
import PokeCard from "../components/PokeCard";

const PokemonDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.get("id") : null;

  const { pokemonDetails, evolutionChain } = usePokemonDetails(search);

  return (
    <section className="pokemon-detail-container flex justify-center">
      {pokemonDetails ? (
        <PokeCard pokeInfo={pokemonDetails} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default PokemonDetail;
