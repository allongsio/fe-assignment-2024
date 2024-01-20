import axios from "axios";

const getList = () => {
  return axios.get("http://localhost:3001/items");
};

export default getList;
