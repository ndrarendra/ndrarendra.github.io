import { motion } from "framer-motion";
import { skills } from "@/data/site";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-default absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold xs:px-1"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const corners = {
  "top-left": "top-[8%] left-[6%]",
  "top-right": "top-[8%] right-[6%] text-right",
  "bottom-right": "bottom-[8%] right-[6%] text-right",
  "bottom-left": "bottom-[8%] left-[6%]",
};

const Skills = () => {
  return (
    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <p className="mt-4 text-center font-medium text-dark/75 dark:text-light/75 md:text-sm">
        Four kinds of work, one thing in the middle.
      </p>

      {/* Plain list for screen readers; the circle below is decorative. */}
      <ul className="sr-only">
        {skills.items.map((s) => (
          <li key={s.name}>{s.name}</li>
        ))}
      </ul>

      <div
        aria-hidden="true"
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
      >
        {skills.groups.map((g) => (
          <span
            key={g.label}
            className={`absolute text-sm font-semibold text-dark/60 dark:text-light/60 md:hidden ${corners[g.corner]}`}
          >
            {g.label}
          </span>
        ))}
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-default dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          {skills.centre}
        </motion.div>
        {skills.items.map((s) => (
          <Skill key={s.name} name={s.name} x={s.x} y={s.y} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
