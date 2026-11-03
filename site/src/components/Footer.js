import Layout from "./Layout";
import { profile } from "@/data/site";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          {new Date().getFullYear()} &copy; {profile.name}
        </span>
        <span className="flex items-center lg:py-2 text-dark/75 dark:text-light/75">
          Design based on&nbsp;
          <a
            href="https://github.com/codebucks27/Next.js-Developer-Portfolio-Starter-Code"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            CodeBucks
          </a>
        </span>
        <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
          Say hello
        </a>
      </Layout>
    </footer>
  );
};

export default Footer;
