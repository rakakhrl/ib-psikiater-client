import Axios from "axios";

const instance = Axios.create({
    baseURL: "http://localhost:3030",
    timeout: 60000,
});

export default instance;