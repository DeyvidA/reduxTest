const PokemonAbilities = (props) => {
  const { abilities } = props;
  return (
    <div>
      <h2>Abilities</h2>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { PokemonAbilities };
