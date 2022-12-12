import axios from "axios";

const getPokemon = async (pokemon) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=151`
  );

  console.log(response.data.results);

  return response.data.results;
};

export { getPokemon };
