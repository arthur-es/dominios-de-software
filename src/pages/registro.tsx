import SEO from "@/components/Global/SEO";
import RegisterForm from "@/components/Pages/Registro/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const RegisterPage: NextPage = () => {
  return (
    <>
      <SEO title="Cadastro" description="Cadastre-se no WPTrack" />
      <PageWrapper>
        <PageContainer>
          <RegisterForm />
        </PageContainer>
      </PageWrapper>
    </>
  );
};

export default RegisterPage;
