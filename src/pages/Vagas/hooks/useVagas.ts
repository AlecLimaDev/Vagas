import { useState, useEffect } from "react";
import apiVagas from "../../../helpers/vagas";
import { AxiosError } from "axios";

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

  useEffect(() => {
    const controller = new AbortController();
    async function handleData() {
      try {
        const { data } = await apiVagas.get("/frontendbr/vagas/issues", {
          signal: controller.signal,
        });
        setData(data);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          throw new Error("Falha na Requisição");
        }
      }
    }

    handleData();

    return () => {
      console.log("Desmontando...");
      controller.abort();
    };
  }, []);

  const filteredJob = data.filter(
    (job: Job) =>
      search.length === 0 || job.title.toLowerCase().includes(search)
  );

  return {
    filteredJob,
    search,
    setSearch,
  };
};

export default useVagas;
