import { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

import Portal from "@/components/Global/Portal";
import { useUser } from "@/components/Global/Providers/user";

import removeAllNonNumberCharacters from "@/utils/removeAllNonNumberCharacters";

import { FormContainer, FormModalContainer, Spinner } from "./styles";
import { toast } from "react-toastify";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IData {
  slug: string;
  name: string;
  whatsapp: string;
  logoUrl?: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  whatsapp: yup.string().required("Campo obrigatório"),
  logoUrl: yup.string(),
  slug: yup.string().required("Campo obrigatório"),
});

const Form: React.FC<IProps> = ({ setOpen }) => {
  const { currentUser } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: IData) => {
    setLoading(true);

    try {
      await axios.post("/api/company/create", {
        ...data,
        whatsapp: "55" + removeAllNonNumberCharacters(data.whatsapp),
        email: currentUser.email,
      });

      toast("Empresa criada!", {
        progressClassName: "progress-confirmation",
        className: "toaster-confirmation",
      });

      router.reload();
    } catch (err) {
      toast("Não foi possível criar empresa!", {
        progressClassName: "progress-error",
        className: "toaster-error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Portal>
      <FormModalContainer>
        <span className="close" onClick={() => setOpen(false)} />
        <FormContainer>
          <h2>Criar empresa</h2>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              name: "",
              slug: "",
              whatsapp: "",
              logoUrl: "",
              email: "",
            }}
            onSubmit={onSubmit}
          >
            <FormikForm>
              <Field name="name" placeholder="Nome da empresa" type="text" />
              <ErrorMessage name="name" component="span" />
              <Field name="slug" placeholder="Slug da empresa" type="text" />
              <ErrorMessage name="slug" component="span" />
              <Field
                name="whatsapp"
                placeholder="WhatsApp da empresa"
                type="tel"
              />
              <ErrorMessage name="whatsapp" component="span" />
              <Field
                name="logoUrl"
                placeholder="URL da imagem da empresa"
                type="text"
              />
              <ErrorMessage name="logoUrl" component="span" />

              <button type="submit" disabled={loading}>
                {loading ? <Spinner /> : "Criar empresa"}
              </button>
            </FormikForm>
          </Formik>
        </FormContainer>
      </FormModalContainer>
    </Portal>
  );
};

export default Form;
