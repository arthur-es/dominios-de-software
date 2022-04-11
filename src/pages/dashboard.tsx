import { NextPage } from "next";

import Header from "@/components/Global/Header";
import Companies from "@/components/Pages/Dashboard/Companies";

import { PageWrapper, PageContainer } from "@/styles/Pages/dashboard";

const DashBoardPage: NextPage = () => {
  return (
    <>
      <Header />

      <PageWrapper>
        <PageContainer>
          <Companies />
        </PageContainer>
      </PageWrapper>
    </>
  );
};

export default DashBoardPage;
