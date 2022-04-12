import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Spinner from "@/utils/Spinner";
import SEO from "@/components/Global/SEO";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const query = router?.asPath?.split("&");
    if (query.length > 3 && router.asPath.includes("type=recovery")) {
      const token = query[0].split("=")[1];

      router.push("/password-update", { query: { token } });
    } else {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <>
      <SEO title="Página inicial" description="Bem-vindo ao WPTrack" />
      <div>
        <Head>
          <title>WP Track</title>
          <meta
            name="description"
            content="Receber feedback de um serviço no WhatsApp ou e-mail nunca foi tão fácil!"
          />
          <link rel="icon" href="/wptrack.svg" />
        </Head>

        <main>
          <Spinner />
        </main>
      </div>
    </>
  );
};

export default Home;
