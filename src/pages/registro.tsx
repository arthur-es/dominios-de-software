import RegisterForm from "@/components/Pages/Registro/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const RegisterPage: NextPage = () => {
  return (
    <>
    <title>Novo cadastro</title>
    <PageWrapper>
      <PageContainer>
        <RegisterForm />
      </PageContainer>
    </PageWrapper>
    </>
  );
};

export default RegisterPage;
