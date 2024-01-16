import axios from "axios";

const apiVagas = axios.create({
  baseURL: "https://api.github.com/repos",
});

export default apiVagas;
