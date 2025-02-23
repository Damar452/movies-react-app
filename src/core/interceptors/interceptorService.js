import axios from "axios";
const BASE_URL = import.meta.env.VITE_OMDB_API;
const API_KEY = import.meta.env.VITE_API_KEY;

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        apikey: API_KEY
    },
});

api.interceptors.request.use(
    (config) => {
        if (!config.params) {
            config.params = {};
        }
        config.params.apikey = API_KEY;
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;