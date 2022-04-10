import { Wrapper, Container, Company, CreateCompany } from "./styles";

import { ImArrowRight2 } from "react-icons/im";

const Companies: React.FC = () => {
  return (
    <Wrapper>
      <h1>Minhas empresas</h1>
      <Container>
        <Company>
          <p>Posê Beleza</p>
          <ImArrowRight2 size={20} />
        </Company>
        <Company>
          <p>Hyerdev</p>
          <ImArrowRight2 size={20} />
        </Company>
        <Company>
          <p>Universidade Federal de Goiás</p>
          <ImArrowRight2 size={20} />
        </Company>
        <CreateCompany>Criar empresa</CreateCompany>
      </Container>
    </Wrapper>
  );
};

export default Companies;
