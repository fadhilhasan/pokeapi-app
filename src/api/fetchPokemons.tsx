import { Pokemon } from "../app/types/types";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");

  if (!response.ok) {
    throw new Error("Failed to fetch pokemons");
  }

  const result = await response.json();

  const pokemonDetailsPromises = result.results.map(
    async (pokemon: { name: string; url: string }) => {
      const detailsResponse = await fetch(pokemon.url);
      if (!detailsResponse.ok) {
        throw new Error(`Error fetching details for ${pokemon.name}`);
      }
      const details = await detailsResponse.json();

      return {
        name: details.name,
        id: details.id,
        type: details.types.map((t: any) => t.type.name),
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${details.name.toLowerCase()}.gif`, // Gunakan GIF dari pokemondb.net
      };
    }
  );

  const pokemonList = await Promise.all(pokemonDetailsPromises);

  return pokemonList;
}
