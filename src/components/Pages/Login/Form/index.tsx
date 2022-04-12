import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { useUser, STATUS } from "@/components/Global/Providers/user";

import { Container, Spinner } from "./styles";
import { toast } from "react-toastify";
import { mapError } from "@/utils/mapError";

interface IData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Entre com um usuário.")
      .email("Entre com um e-mail válido."),
    password: yup.string().required("Entre com uma senha."),
  });

  const { setCurrentUser, setStatus, status } = useUser();

  const onSubmit = async (data: IData) => {
    try {
      setLoading(true);
      const { data: response } = await axios.post("/api/auth/login", {
        email: data.username,
        password: data.password,
      });

      setCurrentUser(response);
      setStatus(STATUS.CONNECTED);
    } catch (err: any) {
      setCurrentUser(null);
      toast(mapError(err.response.data.message), {
        progressClassName: "progress-error",
        className: "toaster-error",
      });
      setCurrentUser(null);
      setStatus(STATUS.DISCONNECTED);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <img src="wptrack.svg" />
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field name="username" placeholder="E-mail" type="email" />
          <ErrorMessage name="username" component="span" />
          <Field name="password" type="password" placeholder="Senha" />
          <ErrorMessage name="password" component="span" />
          <button type="submit">{loading ? <Spinner /> : "Entrar"}</button>
          <Link href="/password-recover" passHref>
            <a className="password-recover">Esqueceu a senha?</a>
          </Link>
          <hr />
          <Link href="/registro" passHref>
            <a className="register">Criar nova conta</a>
          </Link>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginForm;
