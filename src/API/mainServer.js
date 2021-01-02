import Axios from "axios";
import env from "react-dotenv";

const instance = Axios.create({
  baseURL: env.BASE_URL,
  timeout: 60000,
});

export default instance;
