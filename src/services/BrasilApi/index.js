import axios from "axios";

const apiCNPJ=axios.create({
    baseURL: "https://brasilapi.com.br/api/cnpj/v1/"
});

export default apiCNPJ;