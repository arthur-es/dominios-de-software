import SEO from "@/components/Global/SEO";
import PasswordRecoverForm from "@/components/Pages/PasswordRecover/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const RecoverPasswordPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Recuperar senha"
        description="Recupere sua senha do WPTrack"
      />
      <PageWrapper>
        <PageContainer>
          <PasswordRecoverForm />
        </PageContainer>
      </PageWrapper>
    </>
  );
};

export default RecoverPasswordPage;
