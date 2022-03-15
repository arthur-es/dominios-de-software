import LoginForm from "@/components/Pages/Registro/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <LoginForm />
      </PageContainer>
    </PageWrapper>
  );
};

export default LoginPage;
