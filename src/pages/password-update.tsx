import PasswordUpdateForm from "@/components/Pages/PasswordUpdate/Form";
import { PageWrapper, PageContainer } from "@/styles/Pages/login";
import { NextPage } from "next";

const UpdatePasswordPage: NextPage = () => {
  return (
    <>
    <title>Atualizar senha</title>
    <PageWrapper>
      <PageContainer>
        <PasswordUpdateForm />
      </PageContainer>
    </PageWrapper>
    </>
  );
};

export default UpdatePasswordPage;
