import axios from "axios";

const getPokemon = async () => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=151`
  );

  return response.data.results;
};

const getPokemonDetails = async (pokemon) => {
  const response = await axios.get(pokemon.url);

  return response.data;
};

export { getPokemon, getPokemonDetails };
