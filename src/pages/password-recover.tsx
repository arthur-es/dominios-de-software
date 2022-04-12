import PasswordRecoverForm from "@/components/Pages/PasswordRecover/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const RecoverPasswordPage: NextPage = () => {
  return (
    <>
    <title>Recuperar senha</title>
    <PageWrapper>
      <PageContainer>
        <PasswordRecoverForm />
      </PageContainer>
    </PageWrapper>
    </>
  );
};

export default RecoverPasswordPage;
