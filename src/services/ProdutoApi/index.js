import axios from "axios";

const apiProduto=axios.create({
    baseURL: "https://680c0b5c2ea307e081d30afc.mockapi.io/api/v1/"
});

export default apiProduto;