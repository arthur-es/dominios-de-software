import Link from "next/link";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { Container } from "./styles";

interface IData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Entre com um usuário")
      .email("Entre com um e-mail válido"),
    password: yup.string().required("Entre com uma senha"),
  });

  const onSubmit = async (data: IData) => {
    try {
      await axios.post("/api/auth/login", {
        email: data.username,
        password: data.password,
      });
    } catch (err: any) {
      console.log(err.response);
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
          <button type="submit"> Entrar</button>
          <Link href="/" passHref>
            <a className="password-recover">Esqueceu a senha?</a>
          </Link>
          <hr />
          <Link href="/" passHref>
            <a className="register">Criar nova conta</a>
          </Link>
        </Form>
      </Formik>
    </Container>
  );
};

export default LoginForm;
