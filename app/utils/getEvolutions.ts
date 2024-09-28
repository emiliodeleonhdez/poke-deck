import { EvolutionChain } from "../interfaces/pokemon";

export const getEvolutions = (chain: EvolutionChain["chain"]): string[] => {
  const evolutions: string[] = [];

  let currentChain = chain;
  while (currentChain) {
    evolutions.push(currentChain.species.name);

    if (currentChain.evolves_to && currentChain.evolves_to.length > 0) {
      currentChain = currentChain.evolves_to[0];
    } else {
      currentChain = null;
    }
  }

  return evolutions;
};
