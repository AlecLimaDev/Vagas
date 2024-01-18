import { AxiosError } from "axios";
import apiVagas from "../helpers/vagas";

export async function fetchData() {
  try {
    const { data } = await apiVagas.get("/react-brasil/vagas/issues");
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data);
    }
  }
}
