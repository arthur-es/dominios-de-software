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
  name: string;
}

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { setCurrentUser, setStatus } = useUser();

  const validationSchema = yup.object().shape({
    name: yup.string().required("Entre com um nome"),
    username: yup
      .string()
      .required("Entre com um usuário")
      .email("Entre com um e-mail válido"),
    password: yup.string().required("Entre com uma senha"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não conferem")
      .required("Confirme a senha"),
  });

  const onSubmit = async (data: IData) => {
    try {
      setLoading(true);

      const { data: response } = await axios.post("/api/user/create", {
        email: data.username,
        password: data.password,
        name: data.name,
      });

      toast("Usuário registrado com sucesso!", {
        progressClassName: "progress-confirmation",
        className: "toaster-confirmation",
      });

      setCurrentUser(response);
      setStatus(STATUS.CONNECTED);
    } catch (err: any) {
      setCurrentUser(null);
      toast(mapError(err.response.data.message), {
        progressClassName: "progress-error",
        className: "toaster-error",
      });
      setStatus(STATUS.DISCONNECTED);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <img src="wptrack.svg" />
      <Formik
        initialValues={{
          username: "",
          password: "",
          passwordConfirm: "",
          name: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field name="name" placeholder="Nome" />
          <ErrorMessage name="name" component="span" />
          <Field name="username" placeholder="E-mail" type="email" />
          <ErrorMessage name="username" component="span" />
          <Field name="password" type="password" placeholder="Senha" />
          <ErrorMessage name="password" component="span" />
          <Field name="passwordConfirm" type="password" placeholder="Senha" />
          <ErrorMessage name="passwordConfirm" component="span" />
          <button type="submit">{loading ? <Spinner /> : "Criar conta"}</button>
          <hr />
          <Link href="/login" passHref>
            <a className="register">Já possuo conta</a>
          </Link>
        </Form>
      </Formik>
    </Container>
  );
};

export default RegisterForm;
