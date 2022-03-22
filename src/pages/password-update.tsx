import PasswordUpdateForm from "@/components/Pages/PasswordUpdate/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <PageWrapper>
      <PageContainer>
        <PasswordUpdateForm />
      </PageContainer>
    </PageWrapper>
  );
};

export default LoginPage;
