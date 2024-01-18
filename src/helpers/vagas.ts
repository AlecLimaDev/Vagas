import axios from "axios";

const apiVagas = axios.create({
  baseURL: "https://api.github.com/repos",
  params: {
    token: "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"
  }
});

export default apiVagas;
