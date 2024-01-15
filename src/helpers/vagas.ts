import axios from "axios";

const apiVagas = axios.create({
  baseURL: "https://api.github.com/repos/frontendbr/vagas/issues",
});

export default apiVagas;
