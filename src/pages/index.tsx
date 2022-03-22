import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const query = router?.asPath?.split("&");
    if (query.length > 3 && router.asPath.includes("type=recovery")) {
      const token = query[0].split("=")[1];

      router.push("/password-update", { query: { token } });
    }
  }, [router]);

  return (
    <div>
      <Head>
        <title>WP Track</title>
        <meta
          name="description"
          content="Receber feedback de um serviço no WhatsApp nunca foi tão fácil!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to WP Track!</h1>
      </main>
    </div>
  );
};

export default Home;
