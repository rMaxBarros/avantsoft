import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.27.245.226:3000',
});

export default api;