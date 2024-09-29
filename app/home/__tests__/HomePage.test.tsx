import { render, screen } from "@testing-library/react";
import HomePage from "../page";
import "@testing-library/jest-dom";

//had to mock next navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

//Avoids run
jest.mock("../../hooks/useListPokemon", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    pokemonList: [],
    loading: false,
  })),
}));

it("renders the home page without crashing", () => {
  render(<HomePage />);
  // checking if there is hi within the DOM
  expect(screen.getByText(/hi/i)).toBeInTheDocument();
});
