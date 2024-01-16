import useVagas from "./hooks/useVagas";
import * as S from "./style";

interface Job {
  state: string;
  locked: false;
  assignee: null;
  created_at: string;
  updated_at: string;
  closed_at: null;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
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
  const { filteredJob } = useVagas();
  return (
    <>
      <S.Wrapper>
        {filteredJob.map((jobs: Job, index) => (
          <>
            <S.Container key={index}>
              <div>
                <img src={jobs.user.avatar_url} />
                <a href={jobs.user.organizations_url}></a>
                <h2>{jobs.title}</h2>
              </div>
              <p>{jobs.created_at}</p>
              <p>{jobs.updated_at}</p>

              <a href={jobs.html_url} target="_blank">
                <button>Ver vaga no GitHub</button>
              </a>
            </S.Container>
          </>
        ))}
      </S.Wrapper>
    </>
  );
};

export default Vagas;
