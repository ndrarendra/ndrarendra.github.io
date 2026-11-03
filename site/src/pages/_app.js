import "@/styles/globals.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import Head from "next/head";
import { MotionConfig } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MotionConfig reducedMotion="user">
        <div className="font-mont bg-light w-full min-h-screen dark:bg-dark">
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </MotionConfig>
    </>
  );
}
