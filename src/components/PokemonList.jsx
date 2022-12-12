import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, index) => {
        return (
          <PokemonCard
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            types={pokemon.types}
            pokemonId={pokemon.id}
            // favorite={pokemon.favorite}
            key={index}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
