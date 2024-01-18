import { Link } from "react-router-dom";
import * as S from "./style"
import { HTMLAttributes } from "react";

type HeaderProps = HTMLAttributes<HTMLElement>;

const Header = ({children, ...rest}: HeaderProps) => {
  return (
    <>
    <S.sHeader {...rest}>
      {children}
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
