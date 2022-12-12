import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { PokemonAbilities } from "./PokemonAbilities";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({ name, image, abilities }) => {
  return (
    <Card
      title={name}
      cover={<img alt={name} src={image} />}
      extra={<StarOutlined />}
    >
      <Meta description={<PokemonAbilities abilities={abilities} />} />
    </Card>
  );
};

export default PokemonCard;
