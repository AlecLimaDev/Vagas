import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { apiVagas } from "../services/fetch-frontendbr";

interface Job {
  html_url: string;
  id: string;
  node_id: string;
  number: number;
  title: string;
  user: {
    login: string;
    avatar_url: string;
    gravatar_id: number;
    html_url: string;
    type: string;
  };
  labels: {
    name: string;
    color: string;
  };
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
}

const useVagas = () => {
  const [data, setData] = useState<Job[]>([]);
  const [search, setSearch] = useState("");

  const filteredJob = data.filter(
    (job: Job) => data.length === 0 || job.title.toLowerCase().includes(search)
  );

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData(apiEndpoint: string) {
      try {
        const { data } = await apiVagas.get(apiEndpoint, {
          signal: controller.signal,
        });
        return data;
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          throw new Error("Falha na Requisição");
        }
      }
    }

    async function handleData() {
      try {
        const endpoints = [
          "/frontendbr/vagas/issues",
          "/developersRJ/vagas/issues",
          "/devfsa/vagas/issues",
          "/Empregos-dev/Vagas-dev/issues",
          "/programadores-br/geral/issues",
          "/react-brasil/vagas/issues",
        ];

        const requests = endpoints.map(async (endpoint) => {
          return fetchData(endpoint);
        });

        const responses = await Promise.all(requests);
        const mergedData = responses.flat();
        setData(mergedData);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          throw new Error("Erro na Requisição");
        }
      }
    }

    handleData();

    return () => {
      console.log("Desmontando...");
      controller.abort();
    };
  }, []);

  return {
    filteredJob,
    search,
    setSearch,
  };
};

export default useVagas;
