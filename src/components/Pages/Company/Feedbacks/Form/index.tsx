import { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

import Portal from "@/components/Global/Portal";

import removeAllNonNumberCharacters from "@/utils/removeAllNonNumberCharacters";

import { FormContainer, FormModalContainer, Spinner } from "./styles";
import { toast } from "react-toastify";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IData {
  whatsapp: string;
  name: string;
  service: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  whatsapp: yup.string().required("Campo obrigatório"),
  service: yup
    .string()
    .min(6, "Entre com o serviço")
    .required("Campo obrigatório"),
});

const Form: React.FC<IProps> = ({ setOpen }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: IData) => {
    setLoading(true);

    try {
      await axios.post("/api/feedback/create", {
        ...data,
        whatsapp: removeAllNonNumberCharacters(data.whatsapp),
        companyId: router.query.id,
      });

      toast("Feedback criado!", {
        progressClassName: "progress-confirmation",
        className: "toaster-confirmation",
      });

      setOpen(false);
    } catch (err) {
      toast("Não foi possível criar feedback!", {
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
          <h2>Criar feedback</h2>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              name: "",
              whatsapp: "",
              service: "",
            }}
            onSubmit={onSubmit}
          >
            <FormikForm>
              <Field name="name" placeholder="Nome do cliente" type="text" />
              <ErrorMessage name="name" component="span" />
              <Field
                name="whatsapp"
                placeholder="WhatsApp do cliente"
                type="tel"
              />
              <ErrorMessage name="whatsapp" component="span" />
              <Field name="service" placeholder="Serviço para feedback" />
              <ErrorMessage name="service" component="span" />

              <button type="submit" disabled={loading}>
                {loading ? <Spinner /> : "Criar Feedback"}
              </button>
            </FormikForm>
          </Formik>
        </FormContainer>
      </FormModalContainer>
    </Portal>
  );
};

export default Form;
