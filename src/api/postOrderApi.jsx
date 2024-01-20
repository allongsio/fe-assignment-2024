import axios from "axios";

const postOrder = (payload) => {
  return axios
    .post("http://localhost:3001/orders", payload)
    .catch((error) => console.log(error));
};

export default postOrder;
