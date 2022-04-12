import SEO from "@/components/Global/SEO";
import LoginForm from "@/components/Pages/Login/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <>
      <SEO title="Login" description="Faça login no WPTrack" />
      <PageWrapper>
        <PageContainer>
          <LoginForm />
        </PageContainer>
      </PageWrapper>
    </>
  );
};

export default LoginPage;
