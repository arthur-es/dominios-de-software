import { GetServerSideProps, NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";

import Header from "@/components/Global/Header";
import SEO from "@/components/Global/SEO";
import Report from "@/components/Pages/Company/Report";
import Feedbacks from "@/components/Pages/Company/Feedbacks";

import { PageWrapper, PageContainer } from "@/styles/Pages/dashboard";

interface IProps {
  id: string;
  slug: string;
}

interface IData {
  csat: number;
  total: number;
  feedbacks: any[];
}

const CompanyPage: NextPage<IProps> = ({ id, slug }) => {
  const [status, setStatus] = useState({ data: {} as IData, loading: true });

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get(`/api/reports/list?companyId=${id}`);

        setStatus({ data, loading: false });
      } catch (err) {
        setStatus({ ...status, loading: false });
      }
    }

    fetch();
  }, [id]);

  return (
    <>
      <SEO title="Empresa" description="empresa" />
      <Header />

      <PageWrapper>
        <PageContainer>
          <Report
            csat={status.data.csat}
            total={status.data.total}
            loading={status.loading}
          />
          <Feedbacks
            feedbacks={status.data.feedbacks}
            loading={status.loading}
          />
        </PageContainer>
      </PageWrapper>
    </>
  );
};

export default CompanyPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: query,
  };
};
