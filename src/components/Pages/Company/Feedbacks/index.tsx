import { useState } from "react";
import Form from "./Form";

import { Wrapper, Container, Feedback, Spinner } from "./styles";

interface IProps {
  feedbacks: any[];
  loading: boolean;
}

const Feedbacks: React.FC<IProps> = ({ feedbacks, loading }) => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Wrapper>
      <h2>Avaliações</h2>
      {!loading && (
        <>
          <button onClick={() => setFormOpen(true)}>Cadastrar feedback</button>
          <Container>
            {feedbacks?.map((feedback: any) => (
              <Feedback key={feedback.id}>
                <div>
                  <div>
                    <h4>Nome</h4>
                    <p>{feedback.name}</p>
                  </div>
                  <div>
                    <h4>Nota</h4>
                    <p>{feedback.score}</p>
                  </div>
                </div>
                <h4>Descrição</h4>
                <p>{!!feedback.content ? feedback.content : "Não informado"}</p>
              </Feedback>
            ))}

            {formOpen && <Form setOpen={setFormOpen} />}
          </Container>
        </>
      )}

      {loading && <Spinner />}
    </Wrapper>
  );
};

export default Feedbacks;
