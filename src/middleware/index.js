// This file is used to combine all the middleware into one file
export const logger = (store) => (next) => (action) => {
  // Action is the action that is being dispatched
  // Next is the next middleware in the chain
  // Store is the store that is being used

  const returnValue = next(action);
  return returnValue;
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "Deyvid" }, ...actionInfo.action.payload];
  const updatedAction = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };

  return next(updatedAction);
};

// Custom middleware for Redux and React Redux
// add poke to each pokemon in the list
export const pokeName = (store) => (next) => (actionInfo) => {
  const mr = "Mr.";
  // identify the offset and limit of the pokemon list
  const offset = actionInfo.action.payload.offset;

  const prefixdex = actionInfo.action.payload.map((pokemon, index) => {
    const pokemonIndex = `00${offset + 1}`.slice(-3);

    return { ...pokemon, name: `#${pokemonIndex} ${mr} ${pokemon.name}` };
  });
  const updatedAction = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: prefixdex },
  };

  return next(updatedAction);
};
