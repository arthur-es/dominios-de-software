import SEO from "@/components/Global/SEO";
import PasswordUpdateForm from "@/components/Pages/PasswordUpdate/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const UpdatePasswordPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Atualizar senha"
        description="Atualize sua senha do WPTrack"
      />
      <PageWrapper>
        <PageContainer>
          <PasswordUpdateForm />
        </PageContainer>
      </PageWrapper>
    </>
  );
};

export default UpdatePasswordPage;
