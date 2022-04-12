import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { Container, Spinner } from "./styles";
import { toast } from "react-toastify";

interface IData {
  score: string;
  content: string;
}

interface IProps {
  id: string;
}

const FeedbackForm: React.FC<IProps> = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validationSchema = yup.object().shape({
    score: yup.string(),
    content: yup.string().max(300, "Máximo 350 caracteres"),
  });

  const onSubmit = async (data: IData) => {
    try {
      setLoading(true);
      await axios.post(`/api/feedback/register/`, { ...data, id });
      toast("Feedback enviado!", {
        progressClassName: "progress-confirmation",
        className: "toaster-confirmation",
      });
      router.push("/dashboard");
      setLoading(false);
    } catch (err) {
      toast("Não foi possível registrar feedback!", {
        progressClassName: "progress-error",
        className: "toaster-error",
      });
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <img src="/wptrack.svg" />
      <Formik
        initialValues={{ score: "1", content: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Nota</label>

          <Field name="score" as="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
          <Field
            name="content"
            type="text"
            placeholder="Descrição (opcional)"
            as="textarea"
          />
          <ErrorMessage name="content" component="span" />
          <button type="submit">
            {loading ? <Spinner /> : "Registrar feedback"}
          </button>
        </Form>
      </Formik>
    </Container>
  );
};

export default FeedbackForm;
