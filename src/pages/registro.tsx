import RegisterForm from "@/components/Pages/Registro/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <RegisterForm />
      </PageContainer>
    </PageWrapper>
  );
};

export default LoginPage;
