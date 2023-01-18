import axios from "axios";

// cep/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;