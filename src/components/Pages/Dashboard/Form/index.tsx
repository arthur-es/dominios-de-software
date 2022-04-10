import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import Portal from "@/components/Global/Portal";
import { FormContainer, FormModalContainer } from "./styles";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  whatsapp: yup.string().required("Campo obrigatório"),
  logoUrl: yup.string().required("Campo obrigatório"),
  slug: yup.string().required("Campo obrigatório"),
});

const Form: React.FC<IProps> = ({ setOpen }) => {
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
            onSubmit={(data) => console.log(data)}
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
              <Field
                name="email"
                placeholder="E-mail da empresa"
                type="email"
              />
              <ErrorMessage name="email" component="span" />
              <button>Criar empresa</button>
            </FormikForm>
          </Formik>
        </FormContainer>
      </FormModalContainer>
    </Portal>
  );
};

export default Form;
