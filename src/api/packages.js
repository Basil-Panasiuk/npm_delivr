import axios from "axios";

const baseUrl = "https://registry.npmjs.org";

const getPackages = (params = "") => {
  return axios.get(`${baseUrl}/-/v1/search?${params}`);
};

export default {
  getPackages,
};
