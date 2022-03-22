import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { Container, Spinner } from "./styles";
import { toast } from "react-toastify";
import { mapError } from "@/utils/mapError";

interface IData {
  username: string;
  password: string;
}

const PasswordUpdateForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Entre com um usuário")
      .email("Entre com um e-mail válido"),
  });

  const onSubmit = async (data: IData) => {
    try {
      setLoading(true);
      await axios.post("/api/auth/recover-password", {
        email: data.username,
      });
      toast("Um e-mail para recuperação foi enviado para você!", {
        progressClassName: "progress-confirmation",
        className: "toaster-confirmation",
      });
    } catch (err: any) {
      console.log(err);

      toast(mapError(err.response.data.message), {
        progressClassName: "progress-error",
        className: "toaster-error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <img src="wptrack.svg" />
      <h2>Recuperar senha</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field name="username" placeholder="E-mail" type="email" />
          <ErrorMessage name="username" component="span" />

          <button type="submit">{loading ? <Spinner /> : "Enviar"}</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default PasswordUpdateForm;
