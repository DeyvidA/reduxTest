import { Col } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "./actions";
import { getPokemon, getPokemonDetails } from "./api";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import logo from "./static/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonResults = await getPokemon();
      const pokemonsDetails = await Promise.all(
        pokemonResults.map((pokemon) => getPokemonDetails(pokemon))
      );
      dispatch(setPokemons(pokemonsDetails));
    };

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
