import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Seo from "@/components/Seo";
import { GithubIcon } from "@/components/Icons";
import { projects } from "@/data/site";
import { motion } from "framer-motion";

const Cover = ({ img, title, link, className = "" }) => {
  const image = (
    <motion.img
      src={img}
      alt={`Diagram for ${title}`}
      className="w-full h-auto"
      whileHover={link ? { scale: 1.05 } : undefined}
      transition={{ duration: 0.2 }}
    />
  );
  return link ? (
    <a href={link} target="_blank" rel="noreferrer" className={`cursor-pointer overflow-hidden rounded-lg ${className}`}>
      {image}
    </a>
  ) : (
    <div className={`overflow-hidden rounded-lg ${className}`}>{image}</div>
  );
};

const Links = ({ link, github, note, compact = false }) => {
  if (!link && !github) {
    return <p className="mt-2 font-medium text-dark/75 dark:text-light/75 sm:text-sm">{note}</p>;
  }
  return (
    <div className={`mt-2 flex items-center ${compact ? "w-full justify-between" : ""}`}>
      {github ? (
        <a href={github} target="_blank" rel="noreferrer" aria-label="Code on GitHub" className={compact ? "w-8 md:w-6 order-2" : "w-10"}>
          <GithubIcon />
        </a>
      ) : null}
      {link ? (
        compact ? (
          <a href={link} target="_blank" rel="noreferrer" className="text-lg font-semibold underline md:text-base">
            Visit
          </a>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`${github ? "ml-4" : ""} rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base`}
          >
            Visit project
          </a>
        )
      ) : null}
      {compact && !link && github ? (
        <a href={github} target="_blank" rel="noreferrer" className="text-lg font-semibold underline md:text-base">
          View code
        </a>
      ) : null}
    </div>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github, note }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Cover img={img} title={title} link={link || github} className="w-1/2 lg:w-full" />
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-2xl">{title}</h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <Links link={link} github={github} note={note} />
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github, note }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Cover img={img} title={title} link={link || github} className="w-full" />
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        <p className="mb-2 font-medium text-dark dark:text-light md:text-sm">{summary}</p>
        <Links link={link} github={github} note={note} compact />
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Seo title="Projects" description="Data engineering, analysis, AI and full stack projects by Adyan Marendra Ramadhani." />
      <main id="main" className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text={projects.headline} className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {projects.items.map((p) => (
              <div key={p.title} className={p.featured ? "col-span-12" : "col-span-6 sm:col-span-12"}>
                {p.featured ? <FeaturedProject {...p} /> : <Project {...p} />}
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
}
