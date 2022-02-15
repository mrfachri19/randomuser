import axios from "../../utils/axios";

export const getAll = () => {
  return {
    type: "GETALLPRODUCT",
    payload: axios.get("https://randomuser.me/api/"),
  };
};
