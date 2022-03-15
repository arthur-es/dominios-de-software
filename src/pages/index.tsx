import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
