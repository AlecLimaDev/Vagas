import { useEffect, useState } from "react";
import apiVagas from "../../helpers/vagas";


interface GitHub {
  state: string,
  locked: false,
  assignee: null,
  created_at: string,
  updated_at: string,
  closed_at: null,
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: number;
  number: number;
  title: string;
  user: {
    login: string;
    id: number;
    node_id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
  };
  labels: {
    id: number;
    node_id: number;
    url: string;
    name: string;
    color: string;
  };
}

const Vagas = () => {
  const [data, setData] = useState<GitHub[]>([]);

useEffect(() => {
  const controller = new AbortController()

  
}, [])

  return (
    <div>Vagas</div>
  )
};

export default Vagas;
