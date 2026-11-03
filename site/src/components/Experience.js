import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import { experience } from "@/data/site";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div className="w-full" initial={{ y: 50 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          {companyLink ? (
            <a href={companyLink} target="_blank" rel="noreferrer" className="text-primary dark:text-primaryDark">
              @{company}
            </a>
          ) : (
            <span className="text-primary dark:text-primaryDark">@{company}</span>
          )}
        </h3>
        <span className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center start"] });

  return (
    <section className="my-64 md:my-32" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experience.map((item) => (
            <Details key={`${item.company}-${item.time}`} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
