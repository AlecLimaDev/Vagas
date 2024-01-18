import  { useMemo } from "react";
import useVagas from "../../pages/Vagas/hooks/useVagas";
import * as S from "./style";

const Table = () => {
  const { filteredJob } = useVagas();

  const arrayTransformado = useMemo(() => {
    const contagem: Record<string, number> = {};
    let numeroAtual = 1;

    return filteredJob.map((item) => {
      const tipo = item.user.type;

      if (!contagem[tipo]) {
        contagem[tipo] = numeroAtual;
        numeroAtual++;
      }

      return {
        ...item,
        numero: contagem[tipo],
      };
    });
  }, [filteredJob]);

  const totalItens: number = useMemo(() => {
    return arrayTransformado.reduce((total, item) => total + item.numero, 0);
  }, [arrayTransformado]);

  return (
    <S.sTable>
      <h1>Dados em tempo real</h1>
      <p>Vagas: <span>{totalItens}</span></p>
    </S.sTable>
  );
};

export default Table;
