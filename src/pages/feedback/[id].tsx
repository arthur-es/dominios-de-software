import { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import SEO from "@/components/Global/SEO";
import FeedbackForm from "@/components/Pages/Feedback/Form";
import Spinner from "@/utils/Spinner";
import Header from "@/components/Global/Header";

import { PageWrapper, PageContainer } from "@/styles/Pages/login";

const LoginPage: NextPage = ({ id }: any) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!id) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <Spinner />;

  return (
    <>
      <SEO title="Feedback" description="Cadastre seu feedback" />
      <Header />
      <PageWrapper>
        <PageContainer>
          <FeedbackForm id={id} />
        </PageContainer>
      </PageWrapper>
    </>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: query,
  };
};
