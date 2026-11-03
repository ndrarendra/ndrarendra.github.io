import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import HeroPortrait from "@/components/HeroPortrait";
import HireMe from "@/components/HireMe";
import Seo from "@/components/Seo";
import { LinkArrow } from "@/components/Icons";
import { home, profile } from "@/data/site";
import Link from "next/link";

export default function Home() {
  const hasResume = Boolean(profile.resume);
  return (
    <>
      <Seo description={home.intro} />
      <main id="main" className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 lg:w-full">
              <HeroPortrait />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={home.headline}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">{home.intro}</p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <a
                  href={hasResume ? profile.resume : profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  {hasResume ? "Resume" : "LinkedIn"} <LinkArrow className="w-6 ml-1" />
                </a>
                <Link href="/contact/" className="ml-4 text-lg font-medium text-dark underline dark:text-light md:text-base">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/svgs/light-bulb.svg" alt="" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
