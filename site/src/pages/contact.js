import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Seo from "@/components/Seo";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";
import { contact, profile } from "@/data/site";

export default function Contact() {
  return (
    <>
      <Seo title="Contact" description={contact.text} />
      <main id="main" className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 min-h-[70vh]">
          <AnimatedText text={contact.headline} className="mb-12 lg:!text-7xl sm:!text-6xl xs:!text-4xl" />
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xl font-medium md:text-lg sm:text-base">{contact.text}</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-block bg-dark text-light p-3 px-8 rounded-lg text-xl font-semibold border-2 border-solid border-transparent hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:text-lg sm:text-base"
            >
              {profile.email}
            </a>
            <div className="mt-10 flex items-center justify-center gap-8">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-semibold underline underline-offset-2">
                <span className="w-7 inline-block" aria-hidden="true">
                  <LinkedInIcon />
                </span>
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-semibold underline underline-offset-2">
                <span className="w-7 inline-block" aria-hidden="true">
                  <GithubIcon />
                </span>
                GitHub
              </a>
            </div>
            <p className="mt-12 font-medium text-dark/75 dark:text-light/75 sm:text-sm">
              {profile.location}. {contact.status}
            </p>
          </div>
        </Layout>
      </main>
    </>
  );
}
