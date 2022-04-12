import { Container, Spinner } from "./styles";

interface IProps {
  loading: boolean;
  csat: number;
  total: number;
}

const Report: React.FC<IProps> = ({ csat, total, loading }) => {
  return (
    <Container>
      <h2>Média de avaliações</h2>
      {!!csat && !loading && <h3>{csat}</h3>}
      {loading && <Spinner />}
    </Container>
  );
};

export default Report;
