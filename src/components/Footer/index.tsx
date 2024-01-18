import { FaGithub } from "react-icons/fa";
import { Wrapper } from "./style";


const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p>Desenvolvido por: </p>
        <img src={"src/assets/eu.png"} alt="my-photo" />
        <a 
        target="_blank"
        href="https://portfolio-aleclimadev.vercel.app/">Alec Lima </a>
        <p> | Repositório </p>
        <FaGithub />
        <a href="https://github.com/AlecLimaDev/Vagas">GitHub</a>
      </div>
    </Wrapper>
  );
};

export default Footer;
