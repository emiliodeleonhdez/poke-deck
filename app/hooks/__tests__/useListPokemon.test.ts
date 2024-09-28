import { renderHook } from "@testing-library/react";
import useListPokemon from "../useListPokemon";

jest.mock("../../client/apiClient", () => {
  return jest.fn().mockImplementation(() => ({
    get: async () => ({
      results: [
        { url: "https://pokeapi.co/api/v2/pokemon/1" },
        { url: "https://pokeapi.co/api/v2/pokemon/2" },
      ],
    }),
  }));
});

describe("useListPokemon hook", () => {
  it("get a list of pokemons", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useListPokemon("/pokemon?limit=2&offset=20")
    );

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);

    expect(result.current.pokemonList).toHaveLength(2);
  });
});
