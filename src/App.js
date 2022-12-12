import { Col } from "antd";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { setPokemons as setPokemonsActions } from "./actions";
import { getPokemon } from "./api";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import logo from "./static/logo.svg";
import "./App.css";

function App({ pokemons, setPokemons }) {
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonResults = await getPokemon();
      setPokemons(pokemonResults);
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

// Its an object that maps the state to the props of the component
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

// Its an object that maps the dispatch to the props of the component
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (payload) => dispatch(setPokemonsActions(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
