import axios, { AxiosError } from "axios";

export const apiReactBrasil = axios.create({
  baseURL: "https://api.github.com/repos",
  params: {
    token: "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",
  },
});

export async function fetchData() {
  try {
    const { data } = await apiReactBrasil.get("/react-brasil/vagas/issues");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data);
    }
  }
}
