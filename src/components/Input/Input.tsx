import { FormEvent } from "react";
import { InputSearch } from "./style";

const Input = () => {

const onSubmit = (e: FormEvent) => {
    e.preventDefault()
}

  return (
    <InputSearch>
      <form onClick={onSubmit}>
        <div>
          <input type="text" placeholder="Pesquisar..." />
          <button>Buscar</button>
        </div>
        <div>
          <input type="text" />
        </div>
      </form>
    </InputSearch>
  );
};

export default Input;
