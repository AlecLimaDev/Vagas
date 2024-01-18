import { AxiosError } from "axios";

import axios from "axios";

export const apiVagas = axios.create({
  baseURL: "https://api.github.com/repos",
  params: {
    token: "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"
  }
});

export async function fetchData() {
  try {
    const { data } = await apiVagas.get("/frontendbr/vagas/issues");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data);
    }
  }
}

