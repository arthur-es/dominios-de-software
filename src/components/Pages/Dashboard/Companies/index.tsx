import { useState } from "react";

import { Wrapper, Container, Company, CreateCompany } from "./styles";

import { ImArrowRight2 } from "react-icons/im";
import Form from "../Form";

const Companies: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);

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
        <CreateCompany onClick={() => setFormOpen(true)}>
          Criar empresa
        </CreateCompany>
        {formOpen && <Form setOpen={setFormOpen} />}
      </Container>
    </Wrapper>
  );
};

export default Companies;
