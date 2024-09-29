import { useEffect, useState } from "react";
import PokeAxiosClient from "../client/apiClient";
import { pokeApiUrl } from "../utils/constants";
import {
  AbilityResponse,
  EvolutionChainResponse,
  Pokemon,
  PokemonResponsePromise,
  PokemonType,
  Stat,
} from "../interfaces/pokemon";

const usePokemonDetails = (search: string | null) => {
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);
  const [evolutionChain, setEvolutionChain] =
    useState<EvolutionChainResponse | null>(null);
  const pokeAxiosClient = new PokeAxiosClient(pokeApiUrl);

  useEffect(() => {
    if (search) {
      const getPokemonDetail = async () => {
        try {
          const res = await pokeAxiosClient.get<PokemonResponsePromise>(
            `/pokemon/${search}`
          );

          const pokemonData: Pokemon = {
            pokemonId: res.id,
            name: res.name,
            image: res.sprites.front_default,
            types: res.types.map((type: PokemonType) => type.type.name),
            ability: res.abilities.map((ability: AbilityResponse) => ({
              name: ability.ability.name,
              url: ability.ability.url,
            })),
            stats: res.stats.map((stat: Stat) => ({
              base_stat: stat.base_stat,
              effort: stat.effort,
              stat: {
                name: stat.stat.name,
                url: stat.stat.url,
              },
            })),
          };

          setPokemonDetails(pokemonData);

          const speciesRes = await pokeAxiosClient.get<{
            evolution_chain: { url: string };
          }>(`/pokemon-species/${pokemonData.pokemonId}`);
          const evolutionUrl = speciesRes.evolution_chain.url;
          const evolutionRes =
            await pokeAxiosClient.get<EvolutionChainResponse>(evolutionUrl);
          setEvolutionChain(evolutionRes);
        } catch (error) {
          console.error("Error fetching Pokémon details:", error);
        }
      };

      getPokemonDetail();
    }
  }, [search]);

  return { pokemonDetails, evolutionChain };
};

export default usePokemonDetails;
