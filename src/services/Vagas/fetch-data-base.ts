import { AxiosError } from "axios";
import apiVagas from "../../helpers/vagas";

export async function fetchData() {
    try {
      const response = await apiVagas.get("/cooperativas");
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data);
      }
    }
  }