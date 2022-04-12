import { NextPage } from "next";

import Header from "@/components/Global/Header";
import Companies from "@/components/Pages/Dashboard/Companies";

import { PageWrapper, PageContainer } from "@/styles/Pages/dashboard";
import SEO from "@/components/Global/SEO";

const DashBoardPage: NextPage = () => {
  return (
    <>
      <SEO title="Dashboard" description="Dashboard" />
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
