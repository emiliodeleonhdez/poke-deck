import { useEffect, useState } from "react";
import PokeAxiosClient from "../client/apiClient";
import { pokeApiUrl } from "../utils/constants";
import {
  AbilityResponse,
  EvolutionChainResponse,
  Pokemon,
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
          const res = await pokeAxiosClient.get<any>(`/pokemon/${search}`);
          console.log(res.abilities);
          const pokemonData: Pokemon = {
            pokemonId: res.id,
            name: res.name,
            image: res.sprites.front_default,
            types: res.types.map((type: any) => type.type.name),
            ability: res.abilities.map(
              (ability: AbilityResponse) => ability.ability.name
            ),
            stats: res.stats.map((stat: any) => ({
              name: stat.stat.name,
              value: stat.base_stat,
            })),
          };

          setPokemonDetails(pokemonData);

          const speciesRes = await pokeAxiosClient.get<any>(
            `/pokemon-species/${pokemonData.pokemonId}`
          );
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
