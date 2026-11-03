import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import AnimatedNumbers from "@/components/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Seo from "@/components/Seo";
import { InkSplash, usePhotoStatus } from "@/components/HeroPortrait";
import { about, profile } from "@/data/site";

const ProfileCard = () => {
  const [status, imgProps] = usePhotoStatus();
  return (
    <div className="relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl">
        {profile.photo && status !== "missing" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            {...imgProps}
            alt={`Photo of ${profile.name}`}
            className={`w-full h-full object-cover transition-opacity duration-700 ${status === "ok" ? "opacity-100" : "opacity-0"}`}
          />
        ) : null}
        {status === "missing" ? (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <InkSplash />
            <span className="relative text-8xl font-extrabold text-dark dark:text-light">{profile.initials}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <Seo title="About" description={about.bio[0]} />
      <main id="main" className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text={about.headline} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold text-dark/75 dark:text-light/75">Biography</h2>
              {about.bio.map((paragraph, i) => (
                <p key={i} className={`font-medium ${i > 0 ? "my-4" : ""}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="col-span-3 xl:col-span-4 md:order-1 md:col-span-8">
              <ProfileCard />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              {about.numbers.map((n) => (
                <div key={n.label} className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={n.value} />
                    {n.suffix}
                  </span>
                  <h2 className="text-xl font-medium text-right text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    {n.label}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
          <Certifications />
        </Layout>
      </main>
    </>
  );
}
