import { useState } from "react";
import { useRouter } from "next/router";
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

const PasswordRecoverForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const token = router.asPath?.includes("token=")
    ? router.asPath.split("token=")[1]
    : "";

  const validationSchema = yup.object().shape({
    password: yup.string().required("Entre com uma senha"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não conferem")
      .required("Confirme a senha"),
  });

  const onSubmit = async (data: IData) => {
    try {
      setLoading(true);
      await axios.post("/api/auth/update-password", {
        accessToken: token,
        password: data.password,
      });

      toast("Senha atualizada com sucesso", {
        progressClassName: "progress-confirmation",
        className: "toaster-confirmation",
      });

      router.push("/login");
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
          <Field name="password" type="password" placeholder="Senha" />
          <ErrorMessage name="password" component="span" />
          <Field
            name="passwordConfirm"
            type="password"
            placeholder="Confirme a senha"
          />
          <ErrorMessage name="passwordConfirm" component="span" />

          <button type="submit">{loading ? <Spinner /> : "Enviar e-mail de recuperação"}</button>
        </Form>
      </Formik>
    </Container>
  );
};

export default PasswordRecoverForm;
