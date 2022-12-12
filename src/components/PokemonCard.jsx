import { Card } from "antd";
import { useDispatch } from "react-redux";
import Meta from "antd/lib/card/Meta";
import { StarButton } from "./StarButton";
import { setFavorite } from "../actions";

const PokemonCard = ({ name, image, types, pokemonId, favorite }) => {
  const dispatch = useDispatch();
  const typeString = types.map((type) => type.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite(pokemonId));
  };
  return (
    <Card
      title={name}
      cover={<img alt={name} src={image} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typeString} />
    </Card>
  );
};

export default PokemonCard;
