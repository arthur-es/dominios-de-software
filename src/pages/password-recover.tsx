import PasswordRecoverForm from "@/components/Pages/PasswordRecover/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <PasswordRecoverForm />
      </PageContainer>
    </PageWrapper>
  );
};

export default LoginPage;
