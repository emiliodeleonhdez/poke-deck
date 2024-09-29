## Poke Deck Application

## Objective

The Poke Deck application is a React-based project designed to interact with the PokeAPI. It enables users to search for and view details about various Pokémon. This application showcases skills in React development, API integration, state management, and overall architecture.

## Getting Started

To get the application running locally:

#### Clone or Fork the Repository

Clone the project to your local machine.

Install Dependencies

Use the following command to install the necessary dependencies:

```bash
npm install
```

#### Start the Application

Once the dependencies are installed, start the development server using:

```bash
npm run dev
```

## How It Works

Once the project is running, you will see a list of 20 Pokémon displayed as cards. Each card contains the following information:

- Pokémon Name
- Default Image
- Types (e.g., Water, Fire)
- Pokémon Details

By clicking on a Pokémon card, you can view detailed stats and information about that specific Pokémon.

#### Favorite Pokémon

Each Pokémon card has a Pokeball icon. Clicking on this icon will set the Pokémon as a "favorite."
You can view your list of favorite Pokémon by clicking on the Pokeball icon located at the top left of the navigation bar.

#### Application Features

- Built using Next.js in its latest version.
- API requests are managed by a dedicated API Class responsible for all data fetching.
- Error Handling is implemented using an ErrorContext with a provider that displays a notification if there is an issue fetching data from the API.
- Custom hooks for modular functionality:

- useListPokemon: Fetches Pokémon data in batches of 20.
- usePokemonCount: Retrieves the total number of available Pokémon in the API.
- usePokemonDetails: Provides detailed information for a selected Pokémon, including: - Name - Image - Types - Abilities - Stats (HP, Attack, Defense, etc.) - Evolution Chains
- useFavoritePokemon: Manages the user's favorite Pokémon and related logic.

#### Testing

The project includes a test case for the useListPokemon hook using Jest. The objective of this test is to mock the API and evaluate the hook's functionality by obtaining a list of Pokémon.

#### Summary

This Poke Deck application leverages React, Next.js,TypeScript, Tailwind and PokeAPI to provide users with a seamless experience when searching and viewing detailed information about their favorite Pokémon. Error handling, state management, and testing are all integrated to ensure a robust and well-architected application.

#### Asumptions

- TS is very powerful, like all strongly typed languages; it makes development easier and cleaner.
- Jest is hard to configure. I had to follow the steps line by line to set up a valid config.
- I had to create a test case without knowing if it would run correctly. This is because the dev dependency for React Hooks (@testing-library/react-hooks) is only available for React versions lower than the one used in this project (18), specifically versions 16 and 17. However, I created a HomePage.test.tsx, ran a quick test, and it worked after setting up the correct configuration.
- In the apiClient, I used a generic type T. It's helpful in cases like this when the API response is not clearly defined.
- I had a lot of fun.
