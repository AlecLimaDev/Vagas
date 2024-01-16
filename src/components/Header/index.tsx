import { Link } from "react-router-dom";
import * as S from "./style"

const Header = () => {
  return (
    <>
    <S.sHeader>
      <ul>
        <li>
          <h1>BRVAGAS-DEV</h1>
        </li>
      </ul>
      <ul>
        <li>
            <Link to="/">Vagas</Link>
        </li>
      </ul>
      </S.sHeader>
    </>
  );
};

export default Header;
