import { renderHook, act } from "@testing-library/react-hooks";
import useListPokemon from "../../hooks/useListPokemon";
import PokeAxiosClient from "../../client/apiClient";
import { useError } from "../../context/ErrorContext";

jest.mock("../../client/apiClient");

jest.mock("../../context/ErrorContext", () => ({
  useError: () => ({ setError: jest.fn() }),
}));

describe("useListPokemon Hook", () => {
  it("fetches 20 pokemon from the endpoint", async () => {
    const mockGet = jest.fn();
    (PokeAxiosClient as jest.Mock).mockImplementation(() => ({
      get: mockGet,
    }));

    const mockResponse = {
      results: Array.from({ length: 20 }, (_, index) => ({
        url: `https://pokeapi.co/api/v2/pokemon/${index + 1}/`,
      })),
    };

    mockGet.mockResolvedValueOnce(mockResponse);

    const { result, waitForNextUpdate } = renderHook(() =>
      useListPokemon("`/pokemon?limit=20&offset=20`")
    );

    await waitForNextUpdate();

    expect(result.current.pokemonList).toHaveLength(20);
    expect(result.current.loading).toBe(false);
  });
});
