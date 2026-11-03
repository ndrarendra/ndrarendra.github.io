import Head from "next/head";
import { profile } from "@/data/site";

const Seo = ({ title, description }) => {
  const fullTitle = title ? `${title} | ${profile.name}` : `${profile.name} | ${profile.title}`;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default Seo;
