import { SET_POKEMONS } from "../actions/types";

const initilaState = {
  pokemons: [],
};

export const pokemonsReducer = (state = initilaState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};
