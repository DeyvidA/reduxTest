import { Input } from "antd";

const Searcher = () => {
  return (
    <Input.Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
    />
  );
};

export default Searcher;
