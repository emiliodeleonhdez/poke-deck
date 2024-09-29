"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import usePokemonDetails from "../hooks/usePokemonDetails";
import PokeCardDetail from "../components/PokeCardDetail";

const PokemonDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.get("id") : null;

  const { pokemonDetails, evolutionChain } = usePokemonDetails(search);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className="pokemon-detail-container flex justify-center">
        {pokemonDetails && evolutionChain ? (
          <PokeCardDetail
            pokeInfo={pokemonDetails}
            evolutionChain={evolutionChain}
          />
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </Suspense>
  );
};

export default PokemonDetail;
