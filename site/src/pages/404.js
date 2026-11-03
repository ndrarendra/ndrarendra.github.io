import Link from "next/link";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="This page doesn't exist." />
      <main id="main" className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 min-h-[60vh] text-center">
          <h1 className="text-8xl font-bold md:text-6xl">404</h1>
          <p className="mt-6 text-xl font-medium">This page doesn&apos;t exist. It may have moved when the site was rebuilt.</p>
          <Link href="/" className="mt-10 inline-block bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold dark:bg-light dark:text-dark">
            Go to the home page
          </Link>
        </Layout>
      </main>
    </>
  );
}
