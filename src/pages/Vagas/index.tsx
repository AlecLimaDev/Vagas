import Input from "../../components/Input/Input";
import useVagas from "./hooks/useVagas";
import * as S from "./style";
import { FaGithub } from "react-icons/fa";

export interface Job {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: string;
  node_id: string;
  number: number;
  title: string;
  user: {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    gravatar_id: number;
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
    name: string;
    color: string;
  };

  state: string;
  locked: boolean;
  assignee: null;
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: null;
  author_association: string;
  active_lock_reason: string;
  body: string;
  reactions: {
    url: string;
    total_count: number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
}

const Vagas = () => {
  const { filteredJob } = useVagas();
  return (
    <>
      <S.Section>
        <Input />
      </S.Section>
      <S.Wrapper>
        {filteredJob.map((jobs: Job, index) => (
          <>
            <S.Container key={index}>
              <div>
                <img src={jobs.user.avatar_url} alt={jobs.user.login} />
                <h2>{jobs.user.login}</h2>
              </div>
              <section>
                <h2>{jobs.title}</h2>
                <h3>Comentários: {jobs.comments}</h3>
                <h4>{jobs.created_at}</h4>
                <h4>{jobs.updated_at}</h4>
              </section>
              <section>
                <a href={jobs.html_url} target="_blank">
                  <button>
                    Ver vaga no GitHub
                    <FaGithub />
                  </button>
                </a>
                <p>{jobs.labels.color}</p>
              </section>
            </S.Container>
          </>
        ))}
      </S.Wrapper>
    </>
  );
};

export default Vagas;
