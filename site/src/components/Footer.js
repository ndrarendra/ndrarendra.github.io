import Layout from "./Layout";
import { profile } from "@/data/site";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          Copyright {new Date().getFullYear()} {profile.name}
        </span>
        <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
          Say hello
        </a>
      </Layout>
    </footer>
  );
};

export default Footer;
