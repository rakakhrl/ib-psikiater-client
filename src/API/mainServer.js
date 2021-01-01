import Axios from "axios";

const instance = Axios.create({
    baseURL: "http://122.248.194.13:3000",
    timeout: 60000,
});

export default instance;