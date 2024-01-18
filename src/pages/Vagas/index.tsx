import Input from "../../components/Input/Input";
import useVagas from "./hooks/useVagas";
import * as S from "./style";
import { FaGithub } from "react-icons/fa";

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
  

  const Vagas = () => {
    const { filteredJob } = useVagas();
  
    return (
      <>
        <S.Section>
          <Input />
        </S.Section>
        <S.Wrapper>
          {filteredJob.map((job: Job) => (
            <S.Container key={job.id}>
              <div>
                <img src={job.user.avatar_url} alt={job.user.login} />
                <h2>{job.user.login}</h2>
              </div>
              <section>
                <h2>{job.title}</h2>
                <h3>Comentários: {job.comments}</h3>
                <h4>{job.created_at}</h4>
                <h4>{job.updated_at}</h4>
              </section>
              <section>
                <a href={job.html_url} target="_blank">
                  <button>
                    Ver vaga no GitHub
                    <FaGithub />
                  </button>
                </a>
                <p>{job.labels.color}</p>
              </section>
            </S.Container>
          ))}
        </S.Wrapper>
      </>
    );
  };
  
  export default Vagas;
