import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonWithDetails, setLoading } from "./actions";
import { getPokemon } from "./api";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import logo from "./static/logo.svg";
import "./App.css";

function App() {
  const loading = useSelector((state) => state.loading);
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonResults = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonResults));
      dispatch(setLoading(false));
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
      {loading ? (
        <Col offset={12}>
          <Spin size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
