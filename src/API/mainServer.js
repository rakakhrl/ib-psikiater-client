import Axios from "axios";

const instance = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60000,
});

export default instance;
