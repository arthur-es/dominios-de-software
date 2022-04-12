import React from "react";
import Head from "next/head";

import { SITE_URL } from "@/config";

interface ISEO {
  title: string;
  description: string;
  image?: string;
}

const SEO = ({
  title,
  description,
  image = "/og-512.png",
}: ISEO): JSX.Element => {
  const seo = {
    title: title || "",
    description: description || "WP Track",
    image: `${SITE_URL}${image}`,
  };

  return (
    <Head>
      <title>{title + " · WP Track"}</title>
      <meta name="title" content={title + " · WPTrack"} />
      <meta name="description" content={seo.description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="@arthur-es" />
      <meta name="image" content={seo.image} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* FACEBOOK OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={title + " · WPTrack"} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content="pt_BR" />

      {/* TWITTER */}
      <meta property="twitter:card" content={seo.image} />
      <meta property="twitter:url" content={SITE_URL} />
      <meta property="twitter:title" content={title + " · WPTrack"} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image}></meta>
    </Head>
  );
};

export default SEO;
